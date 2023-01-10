import image from "../Images/personalImage.jpg"

export const Profile = () => {
    return (
        <>
        <div style={{display:'flex',justifyContent:'center',gap:'30px',marginTop:'80px'}}>
            <img style={{borderRadius:'50%',width:'400px',height:"400px",border:'3px solid white'}} src={image} alt="Error"/>
            <div style={{color:'white',alignItems:'center',textAlign:'left'}}>
            <p style={{color:'yellow',fontSize:'20px',marginTop:'60px'}}>Hi, My name is__</p>
            <h1 style={{fontSize:'55px',marginTop:'-10px'}}>Ravinder Kumar</h1>
            <h1 style={{fontSize:'55px',marginTop:'-10px'}}>I'm a Full Stack Web Developer</h1>
            <button style={{backgroundColor:'darkslateblue',cursor:'pointer',color:'white',border:'2px solid white',padding:'10px 10px',fontSize:'20px',marginTop:'40px'}}>Resume </button>
            </div>
        </div>
        </>
    )
}