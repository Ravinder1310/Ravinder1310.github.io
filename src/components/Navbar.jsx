import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';

export const Navbar = () => {
    return ( 
        <div style={{display:'flex',position:'sticky',justifyContent:'space-between',alignItems:'center',padding:'0px 30px',color:'white'}}>
           <h1 style={{fontFamily:"cursive"}}>Ravinder Kumar</h1>
           <div style={{display:'flex',gap:'30px',fontSize:'25px'}}>
              <Link href='#' style={{color:'white',textDecoration:'none'}}>Home</Link>
              <Link href='#' style={{color:'white',textDecoration:'none'}}>About Me</Link>
              <Link href='#' style={{color:'white',textDecoration:'none'}}>Skills</Link>
              <Link href='#' style={{color:'white',textDecoration:'none'}}>Projects</Link>
              <Link href='#' style={{color:'white',textDecoration:'none'}}>Contacts</Link>
             
           </div>
              <Link style={{fontSize:'25px',color:'white'}} href='#' >Resume</Link>
        </div>
    )
}