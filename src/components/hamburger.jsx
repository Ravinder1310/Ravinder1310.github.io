import { HamburgerIcon } from '@chakra-ui/icons'
import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-scroll';
import { Resume2 } from './resume2';
// import { Resume } from './Resume';

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
        name:"Project"

       },
       {
        name:"Github"
       },
       {
        name:"Contact"

       }
]

export function PlacementExample() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement, setPlacement] = React.useState('right')
  
    return (
      <>
        
        <HamburgerIcon colorScheme='blue' onClick={onOpen}/>
        <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent backgroundColor={"black"} color="white" >
            <DrawerHeader borderBottomWidth='1px'>Ravinder Kumar</DrawerHeader>
            <DrawerBody>
            <ul className='ul2'>
              {
                navdata?.map(({name},index)=>{
                    return <li key={index} style={{textDecoration:"none"}}>
                            <Link to={name} spy={true} duration={500} smooth={true} offset={-100} onClick={onClose}>{name}</Link>
                        </li>
                })
              }
              <li><Resume2/></li>
             </ul>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }