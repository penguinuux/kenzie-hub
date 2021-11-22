import { Box, Container, Typography } from "@mui/material";
import { AllInbox, Delete } from "@mui/icons-material";
import { blue } from "@mui/material/colors";

const TechCard = ({ title, status }) => {
  const secondaryBackground = blue[50];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container
        sx={{ m: 1, display: "flex", flexDirection: "row", flexGrow: 1 }}
      >
        <Box
          item
          sx={{
            minWidth: 70,
            minHeight: 70,
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
            {title}
          </Typography>
          <Typography
            variant="subtitle2"
            color="primary"
            sx={{
              backgroundColor: secondaryBackground,
              display: "flex",
              justifyContent: "center",
              borderRadius: 2,
              py: 0.5,
            }}
          >
            {status}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end", flexGrow: 1 }}>
          <Delete
            fontSize="small"
            sx={{
              color: "#00000036",
              "&:hover": {
                color: "#000",
                cursor: "pointer",
              },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default TechCard;
