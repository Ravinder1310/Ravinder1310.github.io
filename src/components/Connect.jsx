import { Box } from "@mui/system"
import { Link } from "react-scroll"



export const Connects = () => {
    return (
        <Box className="social">
            <h1>Connect with me:</h1>
             <Box className="social_img">
               <a  target="_blank"  href="https://www.linkedin.com/in/ravinder-kumar-958a55233/"><img src="../images/social/link.png" alt="Error" /></a> 
                <a  target="_blank"  href="https://github.com/Ravinder1310"><img src="../images/social/git.png" alt="Error" /></a>
                <a  target="_blank"  href=""><img src="../images/social/gmail.png" alt="Error" /></a>
                <a  target="_blank"  href=""><img src="../images/social/call.png" alt="Error" style={{marginLeft:"50px"}} /></a>
                <a  target="_blank"  href="https://drive.google.com/file/d/1anRNS5KWvkYNbucHg2uGymuVlCb8GLlk/view?usp=sharing"><img style={{marginLeft:"50px"}} src="../images/social/cv.png" alt="Error" /> </a>
             </Box>
        </Box>
    )
}