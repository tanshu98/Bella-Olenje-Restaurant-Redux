import { Box, Typography } from "@mui/material";
import React from "react";
import SectionImg1 from "../../assets/Images/SectionImg1.png";
import SectionImg2 from "../../assets/Images/SectionImg2.png";
import SectionImg3 from "../../assets/Images/SectionImg3.png";
import SectionBottom from "./SectionBottom";

const Section = () => {
  return (
    <Box
      sx={{
        minWidth: "415px",
        mt: 5,
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        gap: 4,
      }}
    >
      <Typography
        sx={{ fontFamily: "Poppins", fontWeight: 600, fontSize: {xs:'20px',sm:'28px'},mb:7 }}
      >
        How the app works
      </Typography>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: {
              xs: "column-reverse",
              sm: "row",
              textAlign: "center",
            },
          }}
        >
          <img src={SectionImg1} alt="Login View" width={300} height={400} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "start",
            //   gap: 3,
            }}
          >
            <Typography
              sx={{
                fontSize:{xs:'20px', sm:'23px'},
                fontFamily: "Montserrat",
                fontWeight: 700,
                color: "#FA4A0C",
              }}
            >
              Create an account
            </Typography>
            <Typography
              sx={{
                color: "#252B42",
                fontFamily: "Montserrat",
                fontWeight: 700,
                fontSize:{xs:'25px',sm:'30px'},
              }}
            >
              Create/login to an existing <br />
              account to get started
            </Typography>
            <Typography
              sx={{
                color: "#737373",
                fontFamily: "Montserrat",
                fontWeight: 500,
                fontSize:{xs:'17px',sm:'19px'}
              }}
            >
              An account is created with your email <br />
              and a desired password
            </Typography>
          </Box>
        </Box>
        <Box sx={{p:3}}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              flexDirection: { xs: "column", sm: "row", textAlign: "center" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
                gap: 3,
              }}
            >
              <Typography
                sx={{
                fontSize:{xs:'20px', sm:'23px'},
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  color: "#FA4A0C",
                }}
              >
                Explore varieties
              </Typography>
              <Typography
                sx={{
                  color: "#252B42",
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                fontSize:{xs:'25px',sm:'30px'},

                }}
              >
                Shop for your favorites <br />
                meal as e dey hot.
              </Typography>
              <Typography
                sx={{
                  color: "#737373",
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                fontSize:{xs:'17px',sm:'19px'}
                }}
              >
                Shop for your favorite meals or drinks <br />
                and enjoy while doing it.
              </Typography>
            </Box>
            <img src={SectionImg1} alt="Login View" width={300} height={400} />
          </Box>
        </Box>
        <Box sx={{p:3}}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: {
                xs: "column-reverse",
                sm: "row",
                textAlign: "center",
              },
            }}
          >
            <img src={SectionImg3} alt="Login View" width={300} height={400} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
                gap: 3,
              }}
            >
              <Typography
                sx={{
                fontSize:{xs:'20px', sm:'23px'},
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  color: "#FA4A0C",
                }}
              >
                Checkout
              </Typography>
              <Typography
                sx={{
                  color: "#252B42",
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                //   fontSize: "40px",
                fontSize:{xs:'25px',sm:'30px'},

                }}
              >
                When you done check out <br />
                and get it delivered.
              </Typography>
              <Typography
                sx={{
                  color: "#737373",
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                fontSize:{xs:'17px',sm:'19px'}

                }}
              >
                When you done check out and get it <br />
                delivered with ease.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <SectionBottom />
    </Box>
  );
};

export default Section;
