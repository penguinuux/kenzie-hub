import { useState } from "react";
import { Redirect } from "react-router-dom";
import {
  Button,
  Container,
  Grid,
  CssBaseline,
  Typography,
  Modal,
  Box,
  Select,
  TextField,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Add, Close } from "@mui/icons-material";

import Header from "../../components/Header";
import TechCard from "../../components/TechCard";
import WorkCard from "../../components/WorkCard";
import Profile from "../../components/Profile";
import TechModal from "../../components/TechModal";

const Dashboard = ({ authenticated, setAuthenticated }) => {
  const [open, setOpen] = useState(false);

  const handleModal = () => setOpen(!open);

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container component="main" sx={{ px: 1, py: 2 }} spacing={1}>
        <Grid item xs={12} sm={6} md={6} lg={4} sx={{ pr: 1 }}>
          <Box
            component="header"
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
              pr: 1,
              mb: 1.5,
            }}
          >
            <Typography component="h2" variant="h6" sx={{ pl: 1 }}>
              Minhas Tecnologias
            </Typography>
            <Button variant="contained" size="small" onClick={handleModal}>
              <Add />
            </Button>
            <TechModal open={open} handleModal={handleModal} />
          </Box>
          <Container sx={{ mb: 4 }}>
            {[1, 2, 3, 4, 5].map((_, index) => (
              <TechCard key={index} />
            ))}
          </Container>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} sx={{ pr: 1 }}>
          <Box
            component="header"
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
              pr: 1,
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
            {[1, 2, 3, 4, 5].map((_, index) => (
              <WorkCard key={index} />
            ))}
          </Container>
        </Grid>
        <Grid
          item
          lg={4}
          sx={{
            display: {
              xs: "none",
              lg: "block",
            },
          }}
        >
          <Profile />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
