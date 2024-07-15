import { Box, Typography } from "@mui/material";
import React from "react";
import Navbar from "../Navbar/Navbar";

const PageNotFound = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "400px",
        }}
      >
        <Typography
          sx={{
            color: "#FF5733",
            fontSize: "25px",
            fontWeight: 700,
            fontFamily: "Poppins",
          }}
        >
          Page Not Found
        </Typography>
      </Box>
    </>
  );
};

export default PageNotFound;
