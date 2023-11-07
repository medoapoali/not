// test
// import { useTheme } from "@emotion/react";

import { Close } from "@mui/icons-material";
import { Box, Paper, Typography, IconButton } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  // test
  // const theamm = useTheme();

  const [mydata, setmydata] = useState([]);
  // const [totalPrice, settotalPrice] = useState(0);//the code is not good at this problem

  let totalPrice = 0;

  useEffect(() => {
    fetch("http://localhost:3100/mydata")
      .then((response) => response.json())
      .then((data) => setmydata(data));
  }, []);

  const handelfun = (item) => {
    fetch(`http://localhost:3100/mydata/${item.id}`, {
      method: "DELETE",
    });

    const newArr = mydata.filter((timp) => {
      return timp.id !== item.id;
    });
    setmydata(newArr);
  };
  // console.log(mydata);
  return (
    <Box>
      {mydata.map((item) => {
        totalPrice += item.price;
        return (
          <Paper
            key={item.id}
            sx={{
              position: "relative",
              width: "366px",
              display: "flex",
              justifyContent: "space-between",
              mt: "22px",
              pt: "27px",
              pb: "7px",
            }}
          >
            <Typography variant="h6" sx={{ ml: "16px", fontSize: " 1.3em" }}>
              {item.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{ mr: "33px", fontWeight: "1.4em", opacity: "0.8" }}
            >
              {item.price} $
            </Typography>
            <IconButton
              sx={{ position: "absolute", top: "0", right: "0" }}
              onClick={() => {
                handelfun(item);
              }}
            >
              <Close sx={{ fontSize: "20px" }} />
            </IconButton>
          </Paper>
        );
      })}

      <Typography variant="h6" sx={{ mt: "30px", textAlign: "center" }}>
        👉 You Spend $ {totalPrice}
      </Typography>
      {/* test */}
      {/* <Typography variant="h5" mt={15} color={theamm.palette.fev.main}>
        medoapoali
      </Typography> */}
    </Box>
  );
}
