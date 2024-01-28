import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Badge } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircle from "@mui/icons-material/AccountCircle";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import styles from "./styles.module.scss";
export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={styles.navToolbar}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <div>
            <IconButton size="large" color="inherit">
              <Badge variant="dot" overlap="circular" color="error">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>

            <IconButton size="large" color="inherit">
              <AccountCircle />
            </IconButton>
            <IconButton size="large" color="inherit">
              <GridViewOutlinedIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
