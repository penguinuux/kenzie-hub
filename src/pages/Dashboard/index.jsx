import { Redirect } from "react-router-dom";
import { Button, Container, CssBaseline, Typography, Box } from "@mui/material";
import { Add } from "@mui/icons-material";

import Header from "../../components/Header";
import TechCard from "../../components/TechCard";
import WorkCard from "../../components/WorkCard";

const Dashboard = ({ authenticated, setAuthenticated }) => {
  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg">
        <Container component="section" sx={{ px: 1, py: 2 }}>
          <Box sx={{ flexGrow: 1 }}>
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
            <Container>
              {[1, 2, 3, 4, 5].map((_) => (
                <TechCard />
              ))}
            </Container>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
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
            <Container>
              {[1, 2, 3, 4, 5].map((_) => (
                <WorkCard />
              ))}
            </Container>
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default Dashboard;
