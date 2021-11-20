import {
  Box,
  CssBaseline,
  Container,
  Button,
  Avatar,
  Typography,
  TextField,
} from "@mui/material";
import { Lock } from "@mui/icons-material";
import useStyles from "./styles";

const Login = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <Box className={classes.box} maxWidth="xs">
          <Avatar
            sx={{ m: 1, width: 55, height: 55, bgcolor: "secondary.main" }}
          >
            <Lock />
          </Avatar>
          <Typography component="h1" variant="h4">
            Login
          </Typography>
          <Box component="form">
            <TextField
              margin="normal"
              fullWidth
              placeholder="Email"
              label="Email"
            />
            <TextField
              margin="normal"
              fullWidth
              placeholder="Senha"
              label="Senha"
            />
            <Button
              className={classes.button}
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
          <Button
            className={classes.button}
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
