import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import {
  Brightness4,
  Brightness7,
  Create,
  Logout,
  Person2,
  Settings,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";

export default function Drawerr({
  drawerWidth,
  setmymode,
  noneOr,
  drwerType,
  onclose,
}) {
  // Pathname
  let location = useLocation();

  const navigate = useNavigate();
  const theme = useTheme();

  const myList = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Create", icon: <Create />, path: "/create" },
    { text: "Profile", icon: <Person2 />, path: "/profile" },
    { text: "Seting", icon: <Settings />, path: "/seting" },
  ];
  return (
    <Box component="nav">
      <Drawer
        sx={{
          display: { xs: noneOr, sm: "block" },

          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant={drwerType}
        anchor="left"
        open={true}
        onClose={() => {
          onclose();
        }}
      >
        <List>
          <ListItem
            sx={{ display: "flex", justifyContent: "center" }}
            disablePadding
          >
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "currentMode",
                  theme.palette.mode === "light" ? "dark" : "light"
                );
                setmymode(theme.palette.mode === "dark" ? "light" : "dark");
              }}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7 />
              ) : (
                <Brightness4 />
              )}
            </IconButton>
          </ListItem>

          <Divider />
          {/* you hve three wyas 1- mtreil Link 2- router Link 3- useNavigate in reactRouter 4- mtreil component="a" href="#" */}
          {myList.map((item) => {
            return (
              <ListItem
                key={item.text}
                sx={{
                  bgcolor:
                    location.pathname === item.path
                      ? theme.palette.fev.main
                      : null,
                }}
                disablePadding
              >
                <ListItemButton
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            );
          })}

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
