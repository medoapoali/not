import { ChevronRight } from "@mui/icons-material";
import { Box, Button, InputAdornment, TextField, styled } from "@mui/material";
import { purple } from "@mui/material/colors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  // @ts-ignore
  backgroundColor: theme.palette.medo.main,
  "&:hover": {
    // @ts-ignore
    backgroundColor: theme.palette.medo.main,
    scale: "0.99",
  },
}));

export default function Create() {
  const [title, setTitle] = useState("");
  const [price, setprice] = useState(0);
  const navigate = useNavigate();
  return (
    <Box sx={{ width: "380px" }} component="form">
      <TextField
        onChange={(eo) => {
          setTitle(eo.target.value);
        }}
        fullWidth={true}
        label="Transaction Title"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
      />
      <br />
      <TextField
        onChange={(first) => {
          setprice(+first.target.value);
        }}
        fullWidth
        label="Amount"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />
      <ColorButton
        sx={{ mt: "22px" }}
        variant="contained"
        onClick={() => {
          fetch("http://localhost:3100/mydata", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, price }),
          }).then((item) => {
            navigate("/");
          });
        }}
      >
        Submit <ChevronRight />
      </ColorButton>
    </Box>
  );
}
