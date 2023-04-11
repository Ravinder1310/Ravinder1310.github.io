import { Box } from "@mui/system"
import { Link } from "react-scroll"



export const Connects = () => {
    return (
        <Box className="social">
            <h1>Connect with me:</h1>
             <Box className="social_img">
               <a  target="_blank"  href="https://www.linkedin.com/in/ravinder-kumar-958a55233/"><img src="../images/social/link.png" alt="Error" /></a> 
                <a  target="_blank"  href="https://github.com/Ravinder1310"><img src="../images/social/git.png" alt="Error" /></a>
                <a  target="_blank"  href="https://drive.google.com/file/d/1anRNS5KWvkYNbucHg2uGymuVlCb8GLlk/view?usp=sharing"><img src="../images/social/cv.png" alt="Error" /> </a>
             </Box>
             <Box className="Links">
             -:Mail:-
             <a href="mailto:ravijangra615@gmail.com"> ravijangra615@gmail.com</a><br/>
             -:Mobile:-
             <a href="tel:9728230665"> +91-9728230665</a>
             </Box>
        </Box>
    )
}