import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";

import {
  Box,
  Button,
  CssBaseline,
  Container,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import * as yup from "yup";

const Signup = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup
      .string()
      .required("Telefone obrigatório")
      .matches(/^([1-9]{2}) *[0-9]{4,5}-?[0-9]{4}$/, "Telefone inválido"),
    course_module: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Senha obrigatória"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas não conferem"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    delete data.passwordConfirm;

    api
      .post("/users", data)
      .then((response) => {
        console.log(response.data);
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  const signupButtonHandler = () => {
    return history.push("/signup");
  };

  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            mt: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h3" sx={{ mb: 4 }}>
            Kenzie Hub
          </Typography>
          <Typography component="h2" variant="h4">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              error={!!errors.name}
              helperText={errors.name?.message}
              margin="normal"
              fullWidth
              placeholder="Nome"
              label="Nome"
              {...register("name")}
            />
            <TextField
              error={!!errors.email}
              helperText={errors.email?.message}
              margin="normal"
              fullWidth
              placeholder="Email"
              label="Email"
              {...register("email")}
            />
            <TextField
              error={!!errors.bio}
              helperText={errors.bio?.message}
              margin="normal"
              fullWidth
              placeholder="Bio"
              label="Bio"
              {...register("bio")}
            />
            <TextField
              error={!!errors.contact}
              helperText={errors.contact?.message}
              margin="normal"
              ref="phone"
              fullWidth
              placeholder="(99) 99999-9999"
              label="Telefone"
              {...register("contact")}
            />
            <InputLabel id="select-module">Módulo:</InputLabel>
            <Select
              labelId="select-module"
              label="Módulo"
              defaultValue=""
              {...register("course_module")}
              sx={{ width: 120 }}
            >
              <MenuItem value="">
                <em>Nenhum</em>
              </MenuItem>
              <MenuItem value={"Primeiro"}>Primeiro</MenuItem>
              <MenuItem value={"Segundo"}>Segundo</MenuItem>
              <MenuItem value={"Terceiro"}>Terceiro</MenuItem>
              <MenuItem value={"Quarto"}>Quarto</MenuItem>
            </Select>
            <TextField
              error={!!errors.password}
              helperText={errors.password?.message}
              type="password"
              margin="normal"
              fullWidth
              placeholder="Senha"
              label="Senha"
              {...register("password")}
            />
            <TextField
              error={!!errors.passwordConfirm}
              helperText={errors.passwordConfirm?.message}
              type="password"
              margin="normal"
              fullWidth
              placeholder="Confirmar senha"
              label="Confirmar senha"
              {...register("passwordConfirm")}
            />
            <Button
              sx={{ mt: 1.5, mb: 2.5 }}
              type="submit"
              fullWidth
              variant="contained"
              size="medium"
              onClick={signupButtonHandler}
            >
              Cadastrar
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Signup;
