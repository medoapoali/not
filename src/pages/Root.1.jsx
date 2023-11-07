import { Outlet } from "react-router-dom";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import Appbar from "MUI-componaents/Appbar";
import Drawerr from "MUI-componaents/Drawerr";
import React from "react";
import getDesignTokens from "styles/MyTheme";

const drawerWidth = 240;
export default function Root() {
  const [mode, setmymode] = useState(
    localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );

  const [noneOr, setnonOr] = useState("none");
  const [drwerType, setdrwerType] = useState("persistent");

  const showDrawer = () => {
    setdrwerType("temporary");
    setnonOr("block");
  };
  const onclose = () => {
    setnonOr("none");
    setdrwerType("persistent");
  };
  // Update the theme only if the mode changes
  // useMemo is new hook
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Appbar {...{ drawerWidth, showDrawer }} />
        <Drawerr
          {...{ drawerWidth, setmymode, noneOr, drwerType, onclose }}
          // drawerWidth={drawerWidth}
          // setmymode={setmymode}
          // noneOr={noneOr}
          // drwerType={drwerType}
          // onclose={onclose}
        />
        <Box
          component="main"
          sx={{
            ml: { sm: `${drawerWidth}px` },
            display: "flex",
            justifyContent: "center",
            mt: "66px",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
}
