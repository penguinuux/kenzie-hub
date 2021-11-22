import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { Close } from "@mui/icons-material";

import {
  Box,
  Button,
  IconButton,
  DialogTitle,
  Dialog,
  TextField,
  DialogContent,
} from "@mui/material";

import * as yup from "yup";

const WorkModal = ({ open, handleModal, updateUser, token }) => {
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    deploy_url: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ title, description, deploy_url }) => {
    api
      .post(
        "/users/works",
        {
          title,
          description,
          deploy_url,
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
    if (!errors.title && !errors.description && !errors.deploy_url) {
      return handleModal();
    }
  };

  return (
    <Dialog open={open} onClose={handleModal} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ m: 0, p: 2 }}>Cadastrar Trabalho</DialogTitle>
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
          <TextField
            autoFocus
            error={!!errors.title}
            helperText={errors.title?.message}
            margin="dense"
            label="Título"
            fullWidth
            {...register("title")}
          />
          <TextField
            autoFocus
            error={!!errors.description}
            helperText={errors.description?.message}
            margin="dense"
            label="Descrição"
            fullWidth
            {...register("description")}
          />
          <TextField
            autoFocus
            error={!!errors.deploy_url}
            helperText={errors.deploy_url?.message}
            margin="dense"
            label="URL"
            fullWidth
            {...register("deploy_url")}
          />
          <Button
            type="submit"
            onClick={handleButton}
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ mt: 1.5, mb: 2.5 }}
          >
            Cadastrar
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default WorkModal;
