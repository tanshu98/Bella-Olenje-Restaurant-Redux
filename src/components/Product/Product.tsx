import {
  Backdrop,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import { addToCartHandler, fetchProducts,  handleDecrement, handleIncrement } from "../../redux/reducers/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import ProductBg from "../../assets/Images/HeaderBg.png";

const Product = () => {
  // const [itemQty, setItemQty] = useState(1)
  const [openBackDrop, setOpenBackDrop] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { product, isLoading, isError,itemQuantity } = useSelector(
    (state: RootState) => state.product
  );
  console.log(product);
  const timePassIsLoading = true;

  const handleCloseBackDrop = () => {
    setOpenBackDrop((prevState) => !prevState);
  };
  const handleOpenBackDrop = () => {
    setOpenBackDrop((prevState) => !prevState);
  };

  useEffect(() => {
    dispatch(fetchProducts());
    // setOpenBackDrop(true);
  }, []);

  const handleMinus = (id:any) => {
    dispatch(handleDecrement(id))
  }

  const handleAddToCart = ()=> {
    // dispatch(addToCartHandler())
  }

  const handlePlus = (id:any) =>{
    console.log(id, "----id");
    
    dispatch(handleIncrement(id))
  }
 
  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: "#f2f2f2", minWidth: "415px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            flexDirection: "column",
            background: `url(${ProductBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "350px",
          }}
        >
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: 700,
              fontFamily: "Poppins",
              color: "#fff",
              mt: 1,
            }}
          >
            Delicious Food for you{" "}
          </Typography>
          <TextField
            sx={{
              backgroundColor: "#ebeaea",
              p: 1,
              mt: 2,
              width: "50%",
              borderRadius: "30px",
              "& fieldset": { border: "none" },
            }}
            id="input-with-icon-textfield"
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <SearchIcon sx={{ color: "#000", mr: 2 }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  {/* <SearchIcon sx={{ color: "#000" }} /> */}
                  <Button
                    variant="contained"
                    sx={{
                      height: "72px",
                      borderRadius: "0px 30px 30px 0px",
                      mr: -3,
                      color: "#fff",
                      fontWeight: 700,
                      backgroundColor: "#FA4A0C",
                      "&:hover": {backgroundColor: '#FA2A0C',color:'#fff'}
                    }}
                  >
                    Search
                  </Button>
                </InputAdornment>
              ),
            }}
            variant="outlined"
            placeholder="Search"
          />
        </Box>
        {/* <Button onClick={handleOpenBackDrop}>Show backdrop</Button> */}
        <Backdrop
          sx={{ color: "#fff", zIndex: 1 }}
          open={openBackDrop}
          // onClick={handleCloseBackDrop}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        {openBackDrop ? (
          <CircularProgress color="inherit" />
        ) : (
          <Container>
            <Grid
              container
              rowSpacing={10}
              columnSpacing={4}
              sx={{ pt: 13, pb: 5 }}
            >
              {product.map((prod, index) => (
                <Grid
                  item
                  lg={4}
                  md={4}
                  sm={6}
                  xs={12}
                  sx={{ textAlign: "center" }}
                >
                  <Paper
                    elevation={3}
                    key={index}
                    sx={{
                      borderRadius: "20px",
                      width: "100%",
                    }}
                  >
                    <img
                      src={prod.strMealThumb}
                      alt={prod.strMeal}
                      height={140}
                      style={{
                        position: "relative",
                        top: "-50px",
                        borderRadius: "50%",
                      }}
                    />
                    <Typography sx={{ fontSize: "1.3rem" }}>
                      {prod.strMeal}
                      {index}
                    </Typography>
                    <Typography
                      sx={{
                        p: 2,
                        color: "#FA4A0C",
                        fontWeight: 600,
                        fontSize: "20px",
                        fontFamily: "Poppins",
                      }}
                    >
                      Rs {prod.idMeal}
                    </Typography>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center', gap:1,pb:2}}>
                      <Typography>Quantity</Typography>
                      <IconButton onClick={()=>handleMinus(index)} >-</IconButton>
                      <Typography>{itemQuantity}</Typography>
                      <IconButton onClick={()=> handlePlus(prod)}>+</IconButton>
                      {/* <Button variant="contained">+</Button> */}
                      {/* <Button sx={{ backgroundColor:'#FA4A0C',fontWeight:700}} variant="contained">Add to Cart</Button> */}
                    </Box>
                    <Button sx={{mt:1, mb:2, backgroundColor:'#FA4A0C',fontWeight:700}} variant="contained" >Add to Cart</Button>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        )}
        {/* {timePassIsLoading ? (<CircularProgress  sx={{ml:3, color: '#FA4A0C',fontSize:'25px',zIndex:1,display:'flex',alignItems:'center',justifyContent:'center'}} />): ( <Container>
          <Grid
            container
            rowSpacing={10}
            columnSpacing={4}
            sx={{ pt: 13, pb: 5 }}
          >
            {product.map((prod, index) => (
              <Grid
                item
                lg={4}
                md={4}
                sm={6}
                xs={12}
                sx={{ textAlign: "center" }}
              >
                <Paper
                  elevation={3}
                  key={index}
                  sx={{
                    borderRadius: "20px",
                    width: "100%",
                  }}
                >
                  <img
                    src={prod.strMealThumb}
                    alt={prod.strMeal}
                    height={140}
                    style={{
                      position: "relative",
                      top: "-50px",
                      borderRadius: "50%",
                    }}
                  />
                  <Typography sx={{ fontSize: "1.3rem" }}>
                    {prod.strMeal}
                  </Typography>
                  <Typography
                    sx={{
                      p: 2,
                      color: "#FA4A0C",
                      fontWeight: 600,
                      fontSize: "20px",
                      fontFamily: "Poppins",
                    }}
                  >
                    Rs {prod.idMeal}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>)} */}
      </Box>
    </>
  );
};

export default Product;
