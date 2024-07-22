import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import Navbar from "../Navbar/Navbar";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addToCart, removeFromCart } from "../../redux/reducers/CartSlice";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { cartItems, cartTotalQty, cartTotalAmount } = useSelector(
    (state: RootState) => state.cart
  );
  console.log(cartItems);

  const continueShoppingHandler = () => {
    console.log("Inside continueShoppingHandler");
    navigate("/Product");
  };

  const handleAddToCart = (product: any) => {
    console.log(product);
    dispatch(addToCart(product));
  };
  const handleRemoveFromCart = (product: any) => {
    console.log(product);
    dispatch(removeFromCart(product));
    console.log("inside handleRemove From Cart button");
  };

  return (
    <>
      {/* <Navbar /> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "415px",
          height: "350px",
        }}
      >
        {cartItems.length === 0 ? (
          <Box sx={{ minWidth: "415px" }}>
            <Typography
              sx={{ fontWeight: 700, color: "#FA4A0C", fontSize: "25px" }}
            >
              Shopping Cart is Empty 🥲
            </Typography>
            <Button
              sx={{ mt: 5, ml: 4 }}
              onClick={continueShoppingHandler}
              variant="contained"
            >
              Continue Shopping
            </Button>
          </Box>
        ) : (
          <Box sx={{ minWidth: "415px" }}>
            <Typography
              sx={{
                fontSize: "25px",
                color: "#FA4A0C",
                fontWeight: 600,
                textAlign: "center",
                mt: 10,
                // mb:100
              }}
            >
              Shopping Cart
            </Typography>
            <Paper
              elevation={3}
              sx={{
                mt: 5,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                // minWidth: "415px",
                p: 2,
                mb: 3,
              }}
            >
              <Box sx={{ display: "flex", gap: { xs: 7, sm: 9, md: 18 } }}>
                <Typography
                  sx={{
                    ml: { xs: 4, sm: 11, md: 15 },
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                      md: "20px",
                      fontWeight: 600,
                    },
                  }}
                >
                  Product
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                      md: "20px",
                      fontWeight: 600,
                    },
                  }}
                >
                  Price
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                      md: "20px",
                      fontWeight: 600,
                    },
                  }}
                >
                  Quantity
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                      md: "20px",
                      fontWeight: 600,
                    },
                  }}
                >
                  Total
                </Typography>
              </Box>
              <Divider />
              <Box>
                {cartItems.map((item) => (
                  <Box key={item.id}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <img
                          src={item.images[0]}
                          alt={item.description}
                          width={100}
                          height={100}
                        />

                        <Box>
                          <Typography
                            sx={{
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                              whiteSpace: "nowrap",
                              width: "120px",
                              "&:hover": {
                                textOverflow: "initial",
                                overflow: "auto",
                                whiteSpace: "initial",
                              },
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Typography sx={{ fontWeight: 600 }}>
                            {item.availabilityStatus}
                          </Typography>
                        </Box>
                      </Box>

                      {/* <Box sx={{display:'flex',ml:9.5,gap:17}}> */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          ml: { xs: 2, sm: 3 },
                          gap: { xs: 1, sm: 5, md: 17 },
                        }}
                      >
                        <Typography>{item.price.toFixed(2)}</Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "1px solid black",
                            p: 0.5,
                          }}
                        >
                          <IconButton
                            onClick={() => handleRemoveFromCart(item)}
                          >
                            -
                          </IconButton>
                          <Typography>{item.cartQuantity}</Typography>
                          <IconButton onClick={() => handleAddToCart(item)}>
                            +
                          </IconButton>
                        </Box>
                        <Typography>
                          {(item.price * item.cartQuantity).toFixed(2)}
                        </Typography>
                      </Box>
                      {/* <Divider /> */}
                    </Box>
                    <Divider />
                  </Box>
                ))}
              </Box>
            </Paper>
            <Paper elevation={3} sx={{ textAlign: "center" ,mb:3}}>
              <Typography sx={{ pt: 2, pb: 2 }}>
                Cart Subtotal: {cartTotalAmount}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                  textAlign: "center",
                  ml: 20,
                  gap: 3,
                }}
              >
                <Button
                  sx={{
                    backgroundColor: "#FA4A0C",
                    "&:hover": { backgroundColor: "#FA2A0C", color: "#fff" },
                  }}
                  variant="contained"
                >
                  Proceed to buy ({cartTotalQty})
                </Button>
                <Button
                  sx={{
                    mb: 2,
                    backgroundColor: "#FA4A0C",
                    "&:hover": { backgroundColor: "#FA2A0C", color: "#fff" },
                  }}
                  onClick={continueShoppingHandler}
                  variant="contained"
                >
                  GO TO CART
                </Button>
              </Box>
            </Paper>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Cart;
