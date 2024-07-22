import React, { useState } from "react";
import loginSignUpBg from "../../assets/Images/loginsignupbg.png";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import { TabList, TabPanel } from "@mui/lab";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const LoginSignUp = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("1");
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const loginHandler = ()=> {
    navigate('/home');
  }
  return (
    <Box sx={{ width: "100%", backgroundColor: "#e8e8e8", height: "100vh" }}>
      <Paper sx={{ height: "240px", display: "grid", placeItems: "center" }}>
        <img src={loginSignUpBg} alt="" />
        <Box
          sx={{
            // borderBottom: 1,
            borderColor: "transparent",
            "& .MuiTabs-indicator": {
              backgroundColor: "#FF5733", // Custom color
            },
          }}
        >
          <Tabs value={value} onChange={handleChange} textColor="inherit">
            <Tab label="Login" value="1" />
            <Tab label="Sign-up" value="2" />
          </Tabs>
        </Box>
      </Paper>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <TabPanel sx={{ display: "grid", gap: 3 }} value={"1"}>
            <form style={{ display: "grid", placeContent: "center", gap: 1 }}>
              <TextField
                sx={{
                  "& input": {
                    color: "#00000",
                    "&::label": { color: "black" },
                  },
                }}
                id="standard-basic"
                label="Email address"
                InputProps={{
                  sx: {
                    "&:before": {
                      borderBottomColor: "black",
                    },

                    "&:after": {
                      borderBottomColor: "black",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: { "&.Mui-focused": { color: "#000", opacity: 0.4 } },
                }}
                variant="standard"
              />
              <TextField
                sx={{
                  "& input": {
                    color: "#00000",
                    "&::label": { color: "black" },
                    // "-webkit-text-security": square
                  },
                }}
                id="standard-basic"
                label="Password"
                // InputProps={{

                // }}
                InputLabelProps={{
                  sx: { "&.Mui-focused": { color: "#000", opacity: 0.4 } },
                }}
                variant="standard"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  // inputProps: {
                  //   style: { fontFamily: 'monospace'}, 
                  // },
                  sx: {
                    "&:before": {
                      borderBottomColor: "black",
                    },

                    "&:after": {
                      borderBottomColor: "black",
                    },
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Typography sx={{ color: "#FF5733", fontWeight: 600, mt: 2 }}>
                Forgot Passcode?
              </Typography>
              <Button
                sx={{
                  backgroundColor: "#FF5733",
                  color: "#fff",
                  mt: 4,
                  borderRadius: "30px",
                  "&:hover": { backgroundColor: "#FF5733", color: "#fff" },
                }}
                onClick={loginHandler}
              >
                Login
              </Button>
            </form>
          </TabPanel>

          <TabPanel
            sx={{
              "& .MuiTabPanel-root": {
                padding: 0,
              },
              p: 0,
            }}
            value={"2"}
          >
            <form style={{ display: "grid", placeContent: "center" }}>
              <TextField
                sx={{
                  "& input": {
                    color: "#00000",
                    "&::label": { color: "black" },
                  },
                }}
                id="standard-basic"
                label="Name"
                InputProps={{
                  sx: {
                    "&:before": {
                      borderBottomColor: "black",
                    },

                    "&:after": {
                      borderBottomColor: "black",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: { "&.Mui-focused": { color: "#000", opacity: 0.4 } },
                }}
                variant="standard"
              />
              <TextField
                sx={{
                  "& input": {
                    color: "#00000",
                    "&::label": { color: "black" },
                  },
                }}
                id="standard-basic"
                label="Email address"
                InputProps={{
                  sx: {
                    "&:before": {
                      borderBottomColor: "black",
                    },

                    "&:after": {
                      borderBottomColor: "black",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: { "&.Mui-focused": { color: "#000", opacity: 0.4 } },
                }}
                variant="standard"
              />
              <TextField
                sx={{
                  "& input": {
                    color: "#00000",
                    "&::label": { color: "black" },
                  },
                }}
                id="standard-basic"
                label="Password"
                InputLabelProps={{
                  sx: { "&.Mui-focused": { color: "#000", opacity: 0.4 } },
                }}
                variant="standard"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  sx: {
                    "&:before": {
                      borderBottomColor: "black",
                    },

                    "&:after": {
                      borderBottomColor: "black",
                    },
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Typography sx={{ color: "#FF5733", fontWeight: 600, mt: 2 }}>
                Forgot Passcode?
              </Typography>
              <Button
                sx={{
                  backgroundColor: "#FF5733",
                  color: "#fff",
                  mt: 4,
                  borderRadius: "30px",
                  "&:hover": { backgroundColor: "#FF5733", color: "#fff" },
                }}
              >
                Sign-up
              </Button>
            </form>
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};

export default LoginSignUp;
