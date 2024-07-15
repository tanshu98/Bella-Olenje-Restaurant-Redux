import { Box, Button, Typography } from "@mui/material";
import React from "react";
import SectionBottomBg from "../../assets/Images/SectionBottomBg.png";

const SectionBottom = () => {
  return (
    <Box
      sx={{
        minWidth: "415px",
        backgroundImage: { sm: `url(${SectionBottomBg})`, xs: "transparent" },
        backgroundColor: { xs: "#252B42", sm: "none" },
        // backgroundImage: `url(${SectionBottomBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        // height: "500px",
        pb:8
      }}
    >
      <Box sx={{ display: "column", textAlign: "center",mt:12}}>
        <Typography
          sx={{
            fontSize: {xs:'25px',sm:'30px'},
            fontFamily: "Montserrat",
            fontWeight: 700,
            color: "#fff",
          }}
        >
          Download the app now.
        </Typography>
        <Typography
          sx={{
            // fontSize: "24px",
            fontSize:{xs:'17px',sm:'19px'},

            fontFamily: "Montserrat",
            fontWeight: 500,
            mb: 3,
            mt:3,
            color: "#fff",
          }}
        >
          Available on your favorite store. Start your premium experience now
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            alignItems: "center",
            // flexDirection: {xs: 'column', sm: 'row'},
            justifyContent: "center",
            mt: 4,
          }}
        >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FA4A0C",
            color: "#fff",
            borderRadius: "10px",
            boxShadow: "0 10px 30px 0",
            "&:hover": {
              backgroundColor: "#FA4A0C",
              boxShadow: "0 10px 30px 0",
              color: "#fff",
            },
          }}
        >
          Playstore
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "10px",
            //   color: tittle === 'desktop'? '#fff' : '#FA4A0C',
            color: "#fff",
            //   borderColor: tittle === 'desktop'? '#fff' : '#FA4A0C',

            borderColor: "#fff",
            "&:hover": { borderColor: "#fff", color: "#fff" },
          }}
        >
          Appstore
        </Button>
      </Box>
    </Box>
    </Box>
  );
};

export default SectionBottom;
