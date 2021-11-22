import { useState, useEffect } from "react";
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
import { api } from "../../services/api";

import Header from "../../components/Header";
import TechCard from "../../components/TechCard";
import WorkCard from "../../components/WorkCard";
import Profile from "../../components/Profile";
import TechModal from "../../components/TechModal";
import WorkModal from "../../components/WorkModal";

const Dashboard = ({ authenticated, setAuthenticated }) => {
  const [token, setToken] = useState(localStorage.getItem("@kenzieHub:token"));
  const [openTech, setOpenTech] = useState(false);
  const [openWork, setOpenWork] = useState(false);
  const [techList, setTechList] = useState([]);
  const [worksList, setWorksList] = useState([]);
  const [userProfile, setUserProfile] = useState({});

  const handleModalTech = () => setOpenTech(!openTech);
  const handleModalWork = () => setOpenWork(!openWork);

  const updateUser = () => {
    api
      .get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const {
          id,
          name,
          email,
          course_module,
          bio,
          contact,
          avatar_url,
          techs,
          works,
        } = response.data;
        setTechList(techs);
        setWorksList(works);
        setUserProfile({
          id,
          name,
          email,
          course_module,
          bio,
          contact,
          avatar_url,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    updateUser();
  }, []);

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <CssBaseline />
      <Header
        setAuthenticated={setAuthenticated}
        name={userProfile.name}
        avatar_url={userProfile.avatar_url}
      />
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
            <Button variant="contained" size="small" onClick={handleModalTech}>
              <Add />
            </Button>
            <TechModal
              open={openTech}
              handleModal={handleModalTech}
              updateUser={updateUser}
              token={token}
            />
          </Box>
          <Container sx={{ mb: 4 }}>
            {techList.length < 0 ? (
              <h2>Cadastre sua primeira tecnologia</h2>
            ) : (
              techList.map(({ id, title, status }) => (
                <TechCard title={title} status={status} key={id} />
              ))
            )}
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
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={handleModalWork}
            >
              <Add />
            </Button>
            <WorkModal
              open={openWork}
              handleModal={handleModalWork}
              updateUser={updateUser}
              token={token}
            />
          </Box>
          <Container sx={{ mb: 4 }}>
            {techList.length < 0 ? (
              <h2>Cadastre seu primeiro projeto</h2>
            ) : (
              worksList.map(({ id, title, status }) => (
                <WorkCard title={title} status={status} key={id} />
              ))
            )}
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
          <Profile
            name={userProfile.name}
            email={userProfile.email}
            couser_module={userProfile.course_module}
            bio={userProfile.bio}
            contact={userProfile.contact}
            avatar_url={userProfile.avatar_url}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
