import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import { Link } from '@mui/material';
import "../styles/navbar.css";
import {Link} from "react-scroll";
import {HamburgerIcon,CloseIcon } from '@chakra-ui/icons'
import { PlacementExample } from './hamburger';
// import { Resume } from './Resume';
import { Resume2 } from './resume2';

export const Navbar = () => {
    const navdata=[
        {
         name:"Home"

        },
        {
            name:"About Me"
           },
           {
            name:"Skills"
   
           },
           {
            name:"Github"
           },
           {
            name:"Project"
   
           },
           {
            name:"Contact"
   
           }
    ]
    return ( 
        <div className='navbar1'>
           
            <div className='navbar'>
           <h1 style={{fontFamily:"cursive",fontSize:"35px"}}>Ravinder Kumar</h1>
           <div className='hamb'>
                   <PlacementExample/> 
            </div>
           <div className='links'>
           <ul>
              {
                navdata?.map(({name},index)=>{
                    return <li key={index} style={{textDecoration:"none"}}>
                            <Link to={name} spy={true} duration={500} smooth={true} offset={-100}>{name}</Link>
                        </li>
                })
              }
             </ul>
           </div>
              <a className='resume' href=''><Resume2/></a>
         </div>
        </div>
    )
}