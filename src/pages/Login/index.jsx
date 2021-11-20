import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Lock } from "@mui/icons-material";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";

import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";

import * as yup from "yup";

const Login = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token, user } = response.data;

        localStorage.setItem("@kenzieHub:token", token);
        localStorage.setItem("@kenzieHub:user", JSON.stringify(user));

        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            mt: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h2" sx={{ mb: 4 }}>
            Kenzie Hub
          </Typography>
          <Avatar
            sx={{ m: 1, width: 55, height: 55, bgcolor: "secondary.main" }}
          >
            <Lock />
          </Avatar>
          <Typography component="h2" variant="h4">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
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
              error={!!errors.password}
              helperText={errors.password?.message}
              type="password"
              margin="normal"
              fullWidth
              placeholder="Senha"
              label="Senha"
              {...register("password")}
            />
            <Button
              sx={{ mt: 1.5, mb: 1.5 }}
              type="submit"
              fullWidth
              variant="contained"
              size="medium"
            >
              Entrar
            </Button>
          </Box>
          <Typography
            variant="body2"
            align="center"
            color="textPrimary"
            paragraph
          >
            Criar uma página para mostrar suas habilidades, metas e progresso
          </Typography>
          <Divider sx={{ width: "100%" }}>Ou</Divider>
          <Button
            sx={{ mt: 1.5, mb: 1.5 }}
            fullWidth
            variant="outlined"
            size="medium"
          >
            Cadastrar
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Login;
