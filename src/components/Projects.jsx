import "../styles/projects.css"
import { Box, Button, Link } from '@chakra-ui/react';   
 


const projects_data = [
    {
        video:"../images/projects/here_gig.gif",
        title:"Nearbuy clone",
        discription:"It is an e-commerce website clone of Nearbuy for best deals or offers related to resturants, salons or spas.",
        github:'https://github.com/arpit2444/NearBuy/tree/master/nearbuy',
        live:"https://soft-custard-9f29c0.netlify.app/",
        stacks:["React | ","Javascript | ","CSS | ","Chakra UI | "],
        responsibility:["HomePage | ", "Category page | ","Category Navbar"]
    },
    {
        video:"../images/projects/indiaToday_gif.gif",
        title:"IndiaToday clone",
        discription:"A news website clone of IndiaToday for the lastest news around the world.",
        github:'https://github.com/Saket1810/Construct-week',
        live:"https://bespoke-naiad-451ef2.netlify.app/index.html",
        stacks:["HTML | ","Javascript | ","CSS | "],
        responsibility:["Login page | ", "SignUp page | ","Category Section"]
    },
    {
        video:"../images/projects/wrike_gif.gif",
        title:"Wrike clone",
        discription:"The most powerfull work management software clone by which we can manage our projects in a team.",
        github:'https://github.com/Ravinder1310/late-riddle-1569',
        live:"https://earnest-biscuit-2c12ec.netlify.app/",
        stacks:["HTML | ","Javascript | ","CSS | "],
        responsibility:["HomePage | ", "Product pages | ","Login Page | ","SignUp page"]
    },
    {
        video:"../images/projects/here_gig.gif",
        title:"ZARA clone",
        discription:"An internships platform clone, which gives interships and get ready for jobs.",
        github:'https://github.com/shitalkumar87/moldy-care-8778',
        live:"https://quiet-begonia-859735.netlify.app/",
        stacks:["HTML | ","Javascript | ","CSS | "],
        responsibility:["Navbar | ", "Product pages | "]
    }
]
 
 
export const Projects = () => { 

    return ( 
        <Box w={"60%"} margin="auto" mt={"250px"} id="Project">
            <h1 style={{fontSize:"30px",color:"white",textDecoration:"underline",textDecorationColor:"red",margin:"auto",marginBottom:"30px"}}>Projects</h1>
            <Box className="Proj_videos">
            {
                projects_data?.map(({video,title,discription,github,live,stacks,responsibility},index)=>{
                      return <div key={index} className="video_card">
                            <img src={video} alt="Error" />
                            <h1>{title}</h1>
                            <p>{discription}</p>
                           <p style={{marginTop:"20px",fontSize:"30px"}}>-: Tech stacks :- </p>
                           <p style={{color:"#8d8d8d",fontWeight:700,fontStyle:"bold"}}>{stacks} </p>
                           <p style={{marginTop:"20px",fontSize:"30px"}}>-: Responsibilities :-</p>
                           <p style={{color:"#8d8d8d",fontWeight:700}}> {responsibility}</p>
                            <div style={{marginTop:"35px"}}>
                                <Link className="proje_links" href={github} target="_blank">Github</Link>
                                <Link className="proje_links" href={live} target="_blank">Live</Link>
                            </div>
                      </div>
                })
            } 
            </Box>
            
        </Box> 
    ); 
};