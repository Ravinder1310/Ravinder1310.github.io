import { Box } from "@mui/system";
import "../styles/about.css"

export const About = () => {
    return (
        <Box color={"white"} mt="260px" id="About">
            <h1 style={{fontSize:"35px",textDecoration:"underline",textDecorationColor:"red",margin:"auto"}}>About</h1>
            <Box className="about" >
                <Box width={'87%'} fontSize={"25px"} textAlign="left">
                  <h3>Hi. I'm Ravinder Kumar, nice to meet you. Please take look here.</h3>
                </Box>
                <Box fontSize={"15px"} width='100%' paddingTop={"20px"}>
                    <p>
                       Aspiring full-stack web developer, proficient in HTML,
                       CSS, JavaScript, React, and Redux. Passionate about
                       implementing and launching new projects. Able to
                       write production-ready code. Looking to start a career
                       as a web developer with a reputed firm driven by
                       technology.
                    </p>
                </Box>
            </Box>
        </Box>
    )
}