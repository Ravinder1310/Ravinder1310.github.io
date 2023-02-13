import { Flex } from '@chakra-ui/react'
import { Box } from '@mui/system'
import React from 'react'

const Contacts = () => {
  return (
    <Box id='Contacts' textAlign="center" width="35%" margin={"auto"} mt="120px">
      <Box fontSize={"30px"} color="white" margin={"auto"}>
        <h1>Contact</h1>
      </Box>
      <Flex justifyContent="space-around" margin={"auto"} gap="10px" mt={"30px"}>
      <input style={{border:"1px solid black",padding:"0px 10px",borderRadius:"5px"}} type={"email"} placeholder='Enter Email'></input><br/>
      <input style={{border:"1px solid black",padding:"0px 10px",borderRadius:"5px"}} type="text" placeholder='Comment'/>
      </Flex>
      <button style={{border:"1px solid white",borderRadius:"5px",fontSize:"20px",padding:"0px 10px",backgroundColor:"rgb(58, 9, 103)",color:"white",marginTop:"20px"}}>Submit</button>
    </Box>
  )
}

export default Contacts