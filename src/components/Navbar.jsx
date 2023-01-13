import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import "../styles/navbar.css"

export const Navbar = () => {
    return ( 
        <div className='navbar'>
           <h1 style={{fontFamily:"cursive"}}>Ravinder Kumar</h1>
           <div className='links'>
              <a href='#' style={{color:'white',textDecoration:'none'}}>Home</a>
              <a href='#' style={{color:'white',textDecoration:'none'}}>About Me</a>
              <a href='#' style={{color:'white',textDecoration:'none'}}>Skills</a>
              <a href='#' style={{color:'white',textDecoration:'none'}}>Projects</a>
              <a href='#' style={{color:'white',textDecoration:'none'}}>Contacts</a>
             
           </div>
              <a className='resume' href='#' >Resume</a>
        </div>
    )
}