import { Box } from "@mui/system";
import "../styles/about.css"
import code from "../Images/giphy.gif"

export const About = () => {
    return (
        <Box color={"white"} mt="260px" id="About Me">
            <h1  style={{fontSize:"35px",textDecoration:"underline",textDecorationColor:"red",margin:"auto"}}>About</h1>
            <Box className="about">
                <Box className="ravinder">
                  <img src={code} alt="Error" />
                </Box>
                <Box fontSize={"25px"} width='100%' paddingTop={"20px"}>
                    <h1>
                       Aspiring full-stack web developer, proficient in HTML,
                       CSS, JavaScript, React, and Redux. Passionate about
                       implementing and launching new projects. Able to
                       write production-ready code. Looking to start a career
                       as a web developer with a reputed firm driven by
                       technology.
                    </h1>
                </Box>
            </Box>
        </Box>
    )
}