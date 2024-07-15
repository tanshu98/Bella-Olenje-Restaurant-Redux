import { Box, Typography } from '@mui/material'
import React from 'react'
import logo from '../../assets/Images/BellaLogo.png'
import FooterLogo from '../../assets/Images/FooterLogo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box sx={{width:'100%', display: 'flex', flexDirection: {xs:'column',sm:'row'}, alignItems:'center',justifyContent:'space-evenly',gap:2,mt:3,pb:1,maxHeight:'85px',textAlign:'center',minWidth:'415px'}}>
        <Box sx={{display: {xs:'none',sm:'block'}}}>
            <img src={logo} alt="Bella Logo" height={150} />
        </Box>
        <Box sx={{color:'#FA4A0C', display:'flex',gap:3}}>
            <TwitterIcon  />
            <InstagramIcon />
            <FacebookIcon />
        </Box>
        <Box>
            <Typography sx={{fontWeight:700,fontSize:'12px'}}>Copywright 2020 Bella Onojie.com</Typography>
        </Box>
    </Box>
  )
}

export default Footer