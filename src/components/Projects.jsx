import "../styles/projects.css"
import { Box, Button, Link } from '@chakra-ui/react';   
 


const projects_data = [
    {
        video:"../images/projects/p4.gif",
        title: "U-Look(cosmetic products)",
        description: "The U-Look website is an immersive online platform dedicated to beauty and skincare products.",
        GitHub: 'https://github.com/Ravinder1310/ecommerce',
        live: "https://ecommerce-app-bice-rho.vercel.app/",
        stacks:["React | "," Redux | "," Javascript | ", "CSS | ", "Bootstrap | ", "NodeJs | ", "Express.js | ","JWT | ","MongoDb"],
        responsibility:["Complete website"]
    },
    {
        video:"../images/projects/here_gig.gif",
        title: "Nearbuy clone",
        description: "It is an e-commerce website clone of Nearbuy for best deals or offers related to restaurants, salons, or spas.",
        GitHub:'https://github.com/Ravinder1310/NearBuy-clone',
        live: "https://soft-custard-9f29c0.netlify.app/",
        stacks:["React | "," Javascript | ", "CSS | ", "Chakra UI | "],
        responsibility:["HomePage | ", "Category page | ", "Category Navbar"]
    },
    {
        video:"../images/projects/wrike_gif.gif",
        title: "Wrike clone",
        description: "The most powerfull work management software clone by which we can manage our projects in a team.",
        GitHub:'https://github.com/Ravinder1310/Wrike-clone',
        live: "https://earnest-biscuit-2c12ec.netlify.app/",
        stacks:["HTML | ","Javascript | ","CSS | "],
        responsibility:["HomePage | ", "Product pages | ","Login Page | ","SignUp page"]
    },
    {
        video:"../images/projects/here_gig.gif",
        title: "ZARA clone",
        description: "This is one of the biggest international fashion companies, and it belongs to Inditex, one of the world’s largest distribution groups.",
        GitHub:'https://github.com/Ravinder1310/Zara-clone',
        live: "https://quiet-begonia-859735.netlify.app/",
        stacks:["HTML | ", "Javascript | ", "CSS | "],
        responsibility:["Navbar | ", "Product pages | "]
    }
]
 
 
export const Projects = () => { 

    return ( 
        <Box w={"60%"} margin="auto" mt={"250px"} id="Project">
            <h1 style={{fontSize: "30px", color:"white",textDecoration:"underline",textDecorationColor:"red",margin:"auto",marginBottom:"30px"}}>Projects</h1>
            <Box className="Proj_videos">
            {
                projects_data?.map(({video,title,discription,github,live,stacks,responsibility},index)=>{
                      return <div key={index} className="video_card">
                            <img src={video} alt="Error" />
                            <h1>{title}</h1>
                            <p>{discription}</p>
                           <p style={{marginTop:"20px",fontSize:"30px"}} className="stacks">-: Tech stacks :- </p>
                           <p style={{color:"#8d8d8d",fontWeight:700,fontStyle:"bold"}}>{stacks} </p>
                           <p style={{marginTop:"20px",fontSize:"30px"}} className="stacks">-: Responsibilities :-</p>
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
