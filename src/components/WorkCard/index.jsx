import { useState } from "react";
import { Box, Container, Link, Typography } from "@mui/material";
import { WorkOutline, Delete, Edit } from "@mui/icons-material";
import { api } from "../../services/api";
import { purple } from "@mui/material/colors";

import WorkEditModal from "../WorkEditModal";

const WorkCard = ({
  title,
  description,
  deploy_url,
  id,
  updateUser,
  token,
}) => {
  const [openEditWork, setOpenEditWork] = useState(false);
  const handleEditWorkModal = () => setOpenEditWork(!openEditWork);

  const secondaryBackground = purple[50];

  const deleteWork = (id) => {
    api
      .delete(`/users/works/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        updateUser();
      })
      .catch((err) => console.log(err));
  };

  const editWork = () => {
    handleEditWorkModal();
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
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
            <Link
              sx={{ color: "#000000de" }}
              underline="hover"
              href={deploy_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </Link>
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
            {description}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end", flexGrow: 1 }}>
          <Edit
            onClick={editWork}
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
            onClick={() => deleteWork(id)}
            fontSize="small"
            sx={{
              color: "#00000036",
              "&:hover": {
                color: "#000",
                cursor: "pointer",
              },
            }}
          />
          <WorkEditModal
            open={openEditWork}
            handleModal={handleEditWorkModal}
            updateUser={updateUser}
            token={token}
            id={id}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default WorkCard;
