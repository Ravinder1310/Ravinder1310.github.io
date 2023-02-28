import { Box } from "@chakra-ui/react"
import "../styles/skills.css";
// import html from "../Images/skills/html.png"

const images = [
  
    {
        img:"../Images/skills/github_logo-removebg-preview.png",
        title:"GITHUB",
        boxShadow:"box-shadow: rgba(249, 251, 251, 0.979) 0px 5px 15px;"
    },
    {
        img:"../Images/skills/firebase_logo-removebg-preview.png",
        title:"FIREBASE",
        boxShadow:"box-shadow: rgba(235, 221, 29, 0.979) 0px 5px 15px;"
    },
    {
        img:"../Images/skills/bootstrap_logo-removebg-preview.png",
        title:"BOOTSTRAP",
        boxShadow:"rgba(117, 19, 187, 0.979) 0px 5px 15px;"
    }
]

export const Tools = () => {
    return (
        <Box color={'white'} m="auto" mt="100px" w={"60%"} id="Skills" fontStyle={"Loren"}>
            <h1 style={{fontSize:"35px",textDecoration:"underline",textDecorationColor:"red",margin:"auto"}}>Tools</h1>
            <Box className="skills">
               
               
               <Box className="skillsCard" boxShadow={"rgba(249, 251, 251, 0.979) 0px 5px 15px"}>
                <img src="../images/skills/github.png" alt="Error"/>
                <p>GITHUB</p>
               </Box>
               
               <Box className="skillsCard" boxShadow={"rgba(235, 221, 29, 0.979) 0px 5px 15px"}>
                <img src="../images/skills/fire.png" alt="Error"/>
                <p>FIREBASE</p>
               </Box>
               <Box className="skillsCard" boxShadow={"rgba(117, 19, 187, 0.979) 0px 5px 15px"}>
                <img src="../images/skills/boot.png" alt="Error"/>
                <p>BOOTSTRAP</p>
               </Box>
               
               <Box className="skillsCard" boxShadow={"rgba(29, 132, 170, 0.979) 0px 5px 15px"}>
                <img src="../images/skills/vs.png" alt="Error"/>
                <p>VS CODE</p>
               </Box>
               
            </Box>
        </Box>
    )
}