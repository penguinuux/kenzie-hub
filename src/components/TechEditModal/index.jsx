import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { Close } from "@mui/icons-material";

import {
  Box,
  Button,
  Select,
  MenuItem,
  IconButton,
  InputLabel,
  DialogTitle,
  Dialog,
  TextField,
  DialogContent,
} from "@mui/material";

import * as yup from "yup";

const UpdateTechModal = ({ open, handleModal, updateUser, token, id }) => {
  const schema = yup.object().shape({
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ status }) => {
    api
      .put(
        `/users/techs/${id}`,
        {
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        updateUser();
      })
      .catch((err) => console.log(err));
  };

  const handleButton = () => {
    if (!errors.title && !errors.status) {
      return handleModal();
    }
  };

  return (
    <Dialog open={open} onClose={handleModal} maxWidth="sm" fullWidth="true">
      <DialogTitle sx={{ m: 0, p: 2 }}>Atualizar Tecnologia</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleModal}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <Close />
      </IconButton>
      <DialogContent>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <InputLabel id="register technology">Novo status:</InputLabel>
          <Select
            error={!!errors.status}
            labelId="register technology"
            label="Módulo"
            defaultValue="Iniciante"
            {...register("status")}
            sx={{ width: 180 }}
          >
            <MenuItem value="">
              <em></em>
            </MenuItem>
            <MenuItem value={"Inciante"}>Iniciante</MenuItem>
            <MenuItem value={"Intermediário"}>Intermediário</MenuItem>
            <MenuItem value={"Avançado"}>Avançado</MenuItem>
          </Select>
          <Button
            type="submit"
            onClick={handleButton}
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 1.5, mb: 2.5 }}
          >
            Atualizar
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateTechModal;
