import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import { GrNext, GrPrevious } from 'react-icons/gr'; 
import { Box, Button, Link } from '@chakra-ui/react';   
 
const Prev = (props) => { 
    // console.log(props); 
    const { className, onClick } = props; 
    return ( 
        <> 
            <Box borderRadius={"3px"} bg={"blue"} p={"30px 8px"} zIndex={"10"} position={"absolute"} top={"30%"} left={"-38px"} onClick={onClick} boxShadow={"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}> 
                <GrPrevious fontSize={"20px"} color={"white"} /> 
            </Box> 
        </> 
    ); 
}; 
 
const Next = (props) => { 
    // console.log(props); 
    const { className, onClick } = props; 
    return ( 
        <> 
            <Box borderRadius={"3px"} bg={"blue"} p={"30px 8px"} zIndex={"10"} position={"absolute"} top={"30%"} right={"-38px"} onClick={onClick} boxShadow={"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}> 
                <GrNext fontSize={"20px"} color={"#3f4246"} /> 
            </Box> 
        </> 
    ); 
}; 

const projects_data = [
    {
        img:"./images/projects/deals_logo.png",
        title:"Nearbuy clone",
        discription:"created an E-Commerce Website clone of Nearbuy for best deals or offers related to resturants, salons or spas.",
        github:'https://github.com/arpit2444/grieving-driving-625-NearBuy',
        live:"https://soft-custard-9f29c0.netlify.app/",
    },
    {
        img:"./images/projects/india_today_logo.png",
        title:"IndiaToday clone",
        discription:"created an news Website clone of IndiaToday for the lastest news around the world.",
        github:'https://github.com/Saket1810/Construct-week',
        live:"https://bespoke-naiad-451ef2.netlify.app/index.html",
    },
    {
        img:"./images/projects/wrike_img.png",
        title:"Wrike clone",
        discription:"created an most powerfull work management software clone by which we can manage our projects in a team.",
        github:'https://github.com/Ravinder1310/late-riddle-1569',
        live:"https://earnest-biscuit-2c12ec.netlify.app/",
    },
    {
        img:"./images/projects/inter_logo.png",
        title:"InternTheory clone",
        discription:"created an internships platform clone, which giver interships and get ready for jobs.",
        github:'https://github.com/Ravinder1310/can-skin-526',
        live:"https://instant-internship.netlify.app/",
    }
]
 
 
export const Projects = () => { 
 
    const settings = { 
        autoplay:true,
        dots: false,  
        infinite: true, 
        speed: 1000, 
        slidesToShow: 1, 
        slidesToScroll: 1, 
        initialSlide: 0, 
        responsive: [ 
            { 
                breakpoint: 1250, 
                settings: { 
                    slidesToShow: 1, 
                } 
            } 
        ] 
    }; 
     
 
    return ( 
        <Box w={"40%"} margin="auto" mt={"150px"} id="Projects"> 
            <h1 style={{fontSize:"30px",color:"white",textDecoration:"underline",textDecorationColor:"red",margin:"auto",marginBottom:"30px"}}>Projects</h1>
            <Slider {...settings} prevArrow={<Prev />} nextArrow={<Next />}> 
 
                { 
                    projects_data?.map((item) => ( 
                        <Box height={"400px"}>
                            <img  height="300px" width={"100%"} src={item.img} alt="Error"/>
                            <Box bgColor={"black"} color="white" p="10px 10px" height={"200px"}> 
                                <h1 style={{fontSize:"25px",marginBottom:"15px"}}>{item.title}</h1>
                                <Box mt={"200px"} mb="20px" fontSize="20px" display="flex" justifyContent={"center"} m="auto" w={'200px'} gap={"30px"}>
                                    <Link href={item.github} style={{textDecoration:"none",backgroundColor:"grey",padding:"5px 30px",borderRadius:"10px",_hover:{color:"black"}}}>Github</Link>
                                    <Link href={item.live} style={{textDecoration:"none",backgroundColor:"grey",padding:"5px 30px",borderRadius:"10px"}}>Live</Link>
                                </Box>
                                <p style={{marginTop:"20px"}}>{item.discription}</p>
                            </Box>
                        </Box> 
                    )) 
                } 
 
            </Slider> 
        </Box> 
    ); 
};


// aadhar card, pan, photo, bank passbook , checkbook