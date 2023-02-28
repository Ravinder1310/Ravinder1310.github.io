import { Box } from "@chakra-ui/react"
import "../styles/skills.css";
// import html from "../Images/skills/html.png"

const images = [
   
 
    {
        img:"../Images/skills/nodejs_logo-removebg-preview.png",
        title:"NODE JS",
        boxShadow:"box-shadow: rgba(123, 216, 51, 0.979) 0px 5px 15px;"
    },
    {
        img:"../Images/skills/mongodb_logo-removebg-preview.png",
        title:"MONGO DB",
        boxShadow:"box-shadow: rgba(7, 122, 17, 0.979) 0px 5px 15px;"
    },
    {
        img:"../Images/skills/ts_logo.png",
        title:"TYPESCRIPT",
        boxShadow:"box-shadow: rgba(29, 132, 170, 0.979) 0px 5px 15px;"
    },
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

export const Skills = () => {
    return (
        <Box color={'white'} m="auto" mt="320px" w={"60%"} id="Skills" fontStyle={"Loren"}>
            <h1 style={{fontSize:"35px",textDecoration:"underline",textDecorationColor:"red",margin:"auto"}}>Skills</h1>
            <Box className="skills">
               <Box className="skillsCard" boxShadow={"rgba(238, 127, 36, 0.979) 0px 5px 15px"}>
                <img src="../images/skills/html.png" alt="Error"/>
                <p>Html</p>
               </Box>
               <Box className="skillsCard" boxShadow={"rgba(36, 211, 238, 0.979) 0px 5px 15px"}>
                <img src="../images/skills/css.png" alt="Error"/>
                <p>CSS</p>
               </Box>
               <Box className="skillsCard"  boxShadow={" rgba(238, 198, 36, 0.979) 0px 5px 15px"}>
                <img style={{width:"120px"}} src="../images/skills/js.png" alt="Error"/>
                <p>JAVASCRIPT</p>
               </Box>
               <Box className="skillsCard" boxShadow={"rgba(29, 173, 235, 0.979) 0px 5px 15px"}>
                <img src="../images/skills/rct.png" alt="Error"/>
                <p>REACT</p>
               </Box>
               <Box className="skillsCard" boxShadow={"rgba(149, 29, 235, 0.979) 0px 5px 15px"}>
                <img src="../images/skills/rdx.png" alt="Error"/>
                <p>REDUX</p>
               </Box>
               <Box className="skillsCard" boxShadow={"rgba(7, 122, 17, 0.979) 0px 5px 15px"}>
                <img src="../images/skills/mongo.png" alt="Error"/>
                <p>MONGO DB</p>
               </Box>
               <Box className="skillsCard" boxShadow={"rgba(29, 132, 170, 0.979) 0px 5px 15px"}>
                <img src="../images/skills/ts.png" alt="Error"/>
                <p>TYPESCRIPT</p>
               </Box>
               <Box className="skillsCard" boxShadow={"rgba(123, 216, 51, 0.979) 0px 5px 15px"}>
                <img src="../images/skills/node.png" alt="Error"/>
                <p>NODE JS</p>
               </Box>
               
            </Box>
        </Box>
    )
}