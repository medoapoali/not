import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";

export default function NotFound() {
  const theme = useTheme();
  return (
    <Typography
      variant="h3"
      sx={{
        display: "flex",
        justifyContent: "center",
        color: theme.palette.error.main,
      }}
    >
      Not Found
      <br />
      please try later
    </Typography>
  );
}
