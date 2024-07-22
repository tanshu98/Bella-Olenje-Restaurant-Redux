import React from "react";
import Navbar from "../Navbar/Navbar";
import { Box, Button, Divider, Typography } from "@mui/material";
import HeaderBg from "../../assets/Images/HeaderBg.png";
import HeaderGroupImg from "../../assets/Images/HeaderGroupImg.png";
const Header = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", minWidth: "415px" }}>
        {/* <Navbar /> */}
        <Box
          sx={{
            display: "flex",
            // sx={{ mr: 2, display: { sm: "none" } }}

            backgroundImage: { sm: `url(${HeaderBg})`, xs: "transparent" },
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "600px",
            justifyContent: "center",
            position: "relative",
            // alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              // alignItems: 'center',
              // color: {xs:'#000',sm:'#fff'},
              textAlign: "center",
              mt: 15,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "24px" },
                fontWeight: 700,
                fontFamily: "Montserrat",
                color: { sm: "#fff", xs: "#737373" },
              }}
            >
              Food App
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 700,
                fontSize: { xs: "24px", sm: "40px",md:'50px',lg:'58px' },
                color: { xs: "#000", sm: "#fff" },
                mt:1
              }}
            >
              Why stay hungry when <br />
              you can order form Bella Onojie
            </Typography>
            <Typography
              sx={{
                fontSize: {xs:'15px',sm:'20px',md:'24px'},
                fontWeight: 500,
                mt: 2,
                color: { xs: "#000", sm: "#fff" },
              }}
            >
              Download the bella onoje’s food app now on
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
                justifyContent: "center",
                mt: 4,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FA4A0C",
                  color: "#fff",
                  borderRadius: "30px",
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
                  borderRadius: "30px",
                  color: { xs: "#FA4A0C", sm: "#fff" },
                  borderColor: { xs: "#FA4A0C", sm: "#fff" },
                  "&:hover": {
                    borderColor: { xs: "#FA4A0C", sm: "#fff" },
                    color: { xs: "#FA4A0C", sm: "#fff" },
                  },
                }}
              >
                Appstore
              </Button>
            </Box>
          </Box>
          {/* <img
            src={HeaderGroupImg}
            alt=""
            width={548}
            height={650}
            style={{ position: "absolute", top: "370px" }}
          /> */}
          <Box sx={{ position: "absolute", top: { xs: "290px", sm: "400px" } }}>
            <img
              src={HeaderGroupImg}
              alt=""
              width={400}
              height={500}
              // style={{ position: "absolute", top: "435px" }}
            />
          </Box>
        </Box>
        {/* <img src={HeaderBg} alt="" style={{}}/> */}
        {/* <Box>
          
          <Divider sx={{ mt: 45, color: "#000" }} />
        </Box> */}
          <Box>
          <Divider sx={{ mt: {sm:32, xs: 20}, color: "#000" }} />

        </Box>
      </Box>
    </>
  );
};

export default Header;
