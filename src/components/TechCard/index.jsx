import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { AllInbox, Delete, Edit } from "@mui/icons-material";
import { api } from "../../services/api";
import { blue } from "@mui/material/colors";

import TechEditModal from "../TechEditModal";

const TechCard = ({ title, status, id, updateUser, token }) => {
  const [openEditTech, setOpenEditTech] = useState(false);
  const handleEditTechModal = () => setOpenEditTech(!openEditTech);

  const secondaryBackground = blue[50];

  const deleteTech = (id) => {
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        updateUser();
      })
      .catch((err) => console.log(err));
  };

  const editTech = () => {
    handleEditTechModal();
  };

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
              minWidth: 115,
            }}
          >
            {status}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end", flexGrow: 1 }}>
          <Edit
            onClick={editTech}
            fontSize="small"
            sx={{
              mr: 1,
              color: "#00000036",
              "&:hover": {
                color: "#000",
                cursor: "pointer",
              },
            }}
          />
          <Delete
            onClick={() => deleteTech(id)}
            fontSize="small"
            sx={{
              color: "#00000036",
              "&:hover": {
                color: "#000",
                cursor: "pointer",
              },
            }}
          />
          <TechEditModal
            open={openEditTech}
            handleModal={handleEditTechModal}
            updateUser={updateUser}
            token={token}
            id={id}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default TechCard;
