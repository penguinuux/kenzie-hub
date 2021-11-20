import { Redirect } from "react-router-dom";
import {
  Button,
  Container,
  Grid,
  CssBaseline,
  Typography,
  Box,
} from "@mui/material";
import { Add } from "@mui/icons-material";

import Header from "../../components/Header";
import TechCard from "../../components/TechCard";
import WorkCard from "../../components/WorkCard";
import Profile from "../../components/Profile";

const Dashboard = ({ authenticated, setAuthenticated }) => {
  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid
        container
        component="main"
        maxWidth="1400px"
        sx={{ px: 1, py: 2, margin: "0 auto" }}
        spacing={2}
      >
        <Grid item xs={12} sm={6} lg={4}>
          <Box
            component="header"
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
              mb: 1.5,
            }}
          >
            <Typography component="h2" variant="h6" sx={{ pl: 1 }}>
              Minhas Tecnologias
            </Typography>
            <Button variant="contained" size="small">
              <Add />
            </Button>
          </Box>
          <Container sx={{ mb: 4 }}>
            {[1, 2, 3, 4, 5].map((_) => (
              <TechCard />
            ))}
          </Container>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Box
            component="header"
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
              mb: 1.5,
            }}
          >
            <Typography component="h2" variant="h6" sx={{ pl: 1 }}>
              Meus trabalhos
            </Typography>
            <Button variant="contained" color="secondary" size="small">
              <Add />
            </Button>
          </Box>
          <Container sx={{ mb: 4 }}>
            {[1, 2, 3, 4, 5].map((_) => (
              <WorkCard />
            ))}
          </Container>
        </Grid>
        <Grid item xs={12} sm={12} lg={4}>
          <Profile />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
