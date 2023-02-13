import { Box } from "@chakra-ui/react"
import "../styles/skills.css"

const images = [
    {
        img:"../Images/skills/html_logo-removebg-preview.png",
        title:"HTML"
    },
    {
        img:"../Images/skills/css_logo-removebg-preview.png",
        title:"CSS"
    },
    {
        img:"../Images/skills/jS_logo2.png",
        title:"JAVASCRIPT"
    },
    {
        img:"../Images/skills/react_logo-removebg-preview.png",
        title:"REACT"
    },
    {
        img:"../Images/skills/redux_logo-removebg-preview.png",
        title:"REDUX"
    },
    {
        img:"../Images/skills/nodejs_logo-removebg-preview.png",
        title:"NODE JS"
    },
    {
        img:"../Images/skills/mongodb_logo-removebg-preview.png",
        title:"MONGO DB"
    },
    {
        img:"../Images/skills/ts_logo.png",
        title:"TYPESCRIPT"
    },
    {
        img:"../Images/skills/github_logo-removebg-preview.png",
        title:"GITHUB"
    },
    {
        img:"../Images/skills/firebase_logo-removebg-preview.png",
        title:"FIREBASE"
    },
    {
        img:"../Images/skills/bootstrap_logo-removebg-preview.png",
        title:"BOOTSTRAP"
    }
]

export const Skills = () => {
    return (
        <Box color={'white'} m="auto" mt="220px" w={"60%"} id="Skills" fontStyle={"Loren"}>
            <h1 style={{fontSize:"35px",textDecoration:"underline",textDecorationColor:"red",margin:"auto"}}>Skills</h1>
            <Box className="skills">
               {
                images.map(({img,title})=>{
                     return  <div className="skillsCard"  style={{display:"grid",justifyContent:"center"}}>
                        <img className="skills_img" src={img} alt="Error"/>
                        <p>{title}</p>
                        </div>
                    
})
               }
            </Box>
        </Box>
    )
}