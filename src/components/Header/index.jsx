import { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import { blue } from "@mui/material/colors";

const primary = blue[400];

const Header = () => {
  const [anchor, setAnchor] = useState(null);

  const handleMenu = (e) => {
    setAnchor(e.currentTarget);
  };

  const togleMenu = () => {
    setAnchor(null);
  };

  return (
    <Box sx={{ flexGrow: 1, mb: 4 }}>
      <AppBar
        position="static"
        sx={{ borderRadius: 2, backgroundColor: primary }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            size="large"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <Avatar size="larger">P</Avatar>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchor}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchor)}
            onClose={togleMenu}
          >
            <MenuItem onClick={togleMenu}>Perfil</MenuItem>
            <MenuItem onClick={togleMenu}>Sair</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
