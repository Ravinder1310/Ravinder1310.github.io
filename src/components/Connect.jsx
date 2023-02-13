import { Box } from "@mui/system"

const connetData = [
    {
        title:"Linkedin",
        img:"./images/contacts/linkdin_logo.png",
        link:"https://www.linkedin.com/in/ravinder-kumar-958a55233/",
        color:"#2563eb",
    },
    {
        title:"Email",
        img:"./images/contacts/mail_logo-removebg-preview.png",
        link:"",
        color:"#6fc2b0"
    },
    {
        title:"Contact",
        img:"./images/contacts/call_logo-removebg-preview.png",
        link:"",
        color:"#565f69"
    },
    {
        title:"Resume",
        img:"./images/contacts/resume_logo-removebg-preview.png",
        link:"",
        color:"#7028b5"
    },
    {
        title:"Github",
        img:"./images/contacts/git_logo-removebg-preview.png",
        link:"https://github.com/Ravinder1310",
        color:"#333333"
    }
]


export const Connects = () => {
    return (
        <Box zIndex={"400px"} marginTop={"200px"} position={"absolute"} color="white" border="2px solid red">
            {
                connetData?.map(({img,title,link,color},index)=>{
                    return <Box key={index} display={"flex"} gap="20px" justifyContent={"space-between"} bgcolor={color} padding={"10px 10px"} alignItems="center">
                        <p>{title}</p>
                        <img width={"30px"} src={img} alt="Error"></img>
                    </Box>
                })
            }
        </Box>
    )
}