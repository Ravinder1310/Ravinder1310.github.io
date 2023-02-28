import { Divider, Flex } from '@chakra-ui/react'
import { Box } from '@mui/system'
import React from 'react'
import { Connects } from './Connect'
import "../styles/contact.css"
import "../styles/button.css"


const Contacts = () => {
  return (
    <Box id='Contact' className="contact">
      <h1>Contact</h1>
      <Box className="Contact_divider">
           <Box className="inputFields">
            <form action="https://getform.io/f/ef252cf8-16db-4e75-9275-18e2ca0fe04c" method="POST">
              <Box className="contact_card">
                <img src="../images/contacts/prof_icon.png" alt='Error'/>
                <input type="text" placeholder="Enter Name" name='name' required/>
              </Box>
              <Box className="contact_card">
                <img src="../images/contacts/call_icon.png" alt='Error'/>
                <input type="number" placeholder="Enter mobile number" name='mobile' required/>
              </Box>
              <Box className="contact_card">
                <img src="../images/contacts/mail2_logo.png" alt='Error'/>
                <input type="email" placeholder="Enter email" name='email' required/>
              </Box>
              <Box className="contact_card">
                <img src="../images/contacts/msg_logo.png" alt='Error'/>
                <input type="text" placeholder="Write message" name='message' required/>
              </Box>
              <button className='button-85' type='submit'>Submit</button>
              </form>
           </Box>
           {/* <Divider color={"white"} height="350px" marginLeft={"50px"} orientation='vertical' /> */}
           <Connects/>
      </Box>
        
    </Box>
  )
}

export default Contacts