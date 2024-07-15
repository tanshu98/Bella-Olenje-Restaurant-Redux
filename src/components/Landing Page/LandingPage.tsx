import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import landingPageBg from "../../assets/Images/FoodBg.jpeg";
import bellaLogo from "../../assets/Images/BellaLogo.png";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timer = setTimeout(() => {

      setIsLoading(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  // Run navigate as a side effect only..dont render it in JSX directly

  useEffect(() => {
    if (isLoading) {
      navigate("/login-signup");
    }
  }, [isLoading, navigate]);
  return (
    <Box
      sx={{
        backgroundImage: `url(${landingPageBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "250px",
          width: "250px",
          borderRadius: "50%",
          backgroundImage: `url(${bellaLogo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#ffff",
        }}
      >
        <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'center',mt:16, gap:1}}>
        <Typography sx={{color: '#FA4A0C', fontSize: '12px'}}>Food for Everyone</Typography>
        {!isLoading && <CircularProgress  sx={{ml:3, color: '#FA4A0C'}} />}
        {/* <CircularProgress sx={{ml:3, color: '#FA4A0C'}}  /> */}

        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
