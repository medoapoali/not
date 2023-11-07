import {
  AppBar,
  Avatar,
  Typography,
  Toolbar,
  Box,
  Link,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Appbar({ drawerWidth, showDrawer }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { xs: 0, sm: `${drawerWidth}px` },
        }}
        position="static"
      >
        <Toolbar>
          <IconButton
            sx={{ display: { sm: "none" } }}
            onClick={() => {
              showDrawer();
            }}
          >
            <MenuIcon />
          </IconButton>
          <Link
            href="/"
            color="inherit"
            sx={{
              textDecoration: "none",
              flexGrow: 1,
              fontWeight: "bold",
              "&:hover": { fontSize: "16.5px" },
            }}
          >
            My expenses
          </Link>
          <Typography
            variant="body1"
            color="inherit"
            display="flex"
            mr="5px"
            fontWeight="bold"
          >
            seco
          </Typography>
          <Avatar alt="Remy Sharp" src=".\imges\seco.jpg" variant="circular" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
