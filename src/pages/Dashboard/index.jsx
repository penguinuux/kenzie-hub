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
import TechCard from "../../components/TechCard";

const Dashboard = ({ authenticated, setAuthenticated }) => {
  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="md">
        <Container component="section" sx={{ px: 1, py: 2 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Box
              component="header"
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "space-between",
                mb: 3,
              }}
            >
              <Typography component="h2" variant="h6" sx={{ pl: 1 }}>
                Minhas Tecnologias
              </Typography>
              <Button variant="contained" size="small">
                <Add />
              </Button>
            </Box>
            {[1, 2, 3, 4].map((_) => (
              <TechCard />
            ))}
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default Dashboard;
