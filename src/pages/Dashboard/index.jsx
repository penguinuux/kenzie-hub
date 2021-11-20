import { Redirect } from "react-router-dom";
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { Add } from "@mui/icons-material";
import Header from "../../components/Header";

const Dashboard = ({ authenticated, setAuthenticated }) => {
  if (!authenticated) {
    return <Redirect to="/" />;
  }

  const blockBackground = blue[50];

  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="md">
        <Container
          component="section"
          sx={{ px: 1, py: 2, backgroundColor: blockBackground }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Box
              component="header"
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography component="h2" variant="h6" sx={{ pl: 1 }}>
                Minhas Tecnologias
              </Typography>
              <Button variant="contained" size="small">
                <Add />
              </Button>
            </Box>
            <Grid container>
              <Grid item>Card</Grid>
            </Grid>
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default Dashboard;
