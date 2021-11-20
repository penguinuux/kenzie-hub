import { Box, Grid, Container, Typography } from "@mui/material";
import { AllInbox } from "@mui/icons-material";
import { blue } from "@mui/material/colors";

const TechCard = ({ title, status }) => {
  const secondaryBackground = blue[50];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container sx={{ m: 1, display: "flex", flexDirection: "row" }}>
        <Box
          item
          sx={{
            width: 70,
            height: 70,
            backgroundColor: secondaryBackground,
            borderRadius: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mr: 2,
          }}
        >
          <AllInbox color="primary" />
        </Box>
        <Box>
          <Typography component="h3" variant="h6" gutterBottom>
            JavaScript
          </Typography>
          <Typography
            variant="subtitle2"
            paragraph
            color="primary"
            sx={{
              backgroundColor: secondaryBackground,
              display: "flex",
              justifyContent: "center",
              borderRadius: 2,
              py: 0.5,
            }}
          >
            Avançado
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default TechCard;
