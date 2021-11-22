import { Avatar, Box, Container, Typography } from "@mui/material";
import { Phone, Email } from "@mui/icons-material";
import { blue, purple } from "@mui/material/colors";

const Profile = ({ name, email, course_module, contact, bio, avatar_url }) => {
  const secondaryBlue = blue[50];
  const secondaryPurple = purple[50];

  return (
    <Box
      sx={{
        flexGrow: 1,
        height: 470,
        boxShadow: 2,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
      }}
    >
      <Container
        sx={{
          backgroundColor: "secondary.main",
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
          display: "flex",
          alignItems: "center",
          flexGrow: 1,
          height: 100,
        }}
      >
        <Box>
          <Avatar
            sx={{ width: 70, height: 70, mr: 2.5 }}
            alt={name}
            src={avatar_url}
          />
        </Box>
        <Box>
          <Typography
            component="h2"
            variant="h5"
            sx={{ color: "#fff" }}
            gutterBottom
          >
            {name}
          </Typography>
          <Typography sx={{ color: "#fff" }}>{course_module}</Typography>
          <Typography sx={{ color: "#f2f2f2" }}>{bio}</Typography>
        </Box>
      </Container>
      <Container
        sx={{
          display: "flex",
          flexGrow: 1,
          backgroundColor: secondaryBlue,
          borderRadius: 2,
          width: "90%",
          py: 1,
          my: 2,
        }}
      >
        <Box
          color="primary"
          sx={{
            width: 60,
            height: 60,
            borderRadius: 1,
            backgroundColor: "primary.main",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mr: 2,
          }}
        >
          <Phone sx={{ color: "#fff" }} />
        </Box>
        <Box>
          <Typography component="h3" variant="h6" gutterBottom>
            Ligar agora
          </Typography>
          <Typography variant="subtitle2" color="GrayText">
            {contact}
          </Typography>
        </Box>
      </Container>
      <Container
        sx={{
          display: "flex",
          flexGrow: 1,
          backgroundColor: secondaryPurple,
          borderRadius: 2,
          width: "90%",
          py: 1,
          my: 2,
        }}
      >
        <Box
          color="primary"
          sx={{
            width: 60,
            height: 60,
            borderRadius: 1,
            backgroundColor: "secondary.main",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mr: 2,
          }}
        >
          <Email sx={{ color: "#fff" }} />
        </Box>
        <Box>
          <Typography component="h3" variant="h6" gutterBottom>
            Enviar email
          </Typography>
          <Typography variant="subtitle2" color="GrayText">
            {email}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Profile;
