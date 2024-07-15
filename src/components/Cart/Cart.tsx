import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store/store';
import Navbar from '../Navbar/Navbar';
import { Box, Typography } from '@mui/material';

const Cart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {cart,itemQuantity,product} = useSelector((state:RootState)=> state.product)
  console.log(cart);
  
  return (
    <>
    <Navbar />
    <Box sx={{display: 'flex', justifyContent: 'center',alignItems:'center',minWidth:'415px',height:'350px'}}>
      {cart.length === 0 ? (
        <Box>
          <Typography sx={{fontWeight:700, color:'#FA4A0C',fontSize:'25px'}}>Cart is Empty</Typography>
        </Box>
      ): (
        <Box>
      <Typography sx={{fontSize:'32px'}}>Cart</Typography>
          Cart is not empty {JSON.stringify(cart)}
        </Box>
      )}
    </Box>
    </>
  )
}

export default Cart