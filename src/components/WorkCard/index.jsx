import { Box, Container, Typography } from "@mui/material";
import { WorkOutline, Delete } from "@mui/icons-material";
import { purple } from "@mui/material/colors";

const TechCard = ({ title, status }) => {
  const secondaryBackground = purple[50];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container sx={{ m: 1, display: "flex", flexDirection: "row" }}>
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
          <WorkOutline color="secondary" />
        </Box>
        <Box>
          <Typography component="h3" variant="h6" gutterBottom>
            KenzieShop
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#bdbdbd",
              fontSize: "0.8rem",
              height: 20,
              width: {
                xs: 178,
                sm: "auto",
                md: "auto",
                lg: "auto",
                xl: "auto",
              },
              overflow: "hidden",
              whiteSpace: "no-wrap",
              textOverflow: "ellipsis",
            }}
          >
            Uma hamburgueria completa, apenas com React.js.
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
