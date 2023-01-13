import image from "../Images/personalImage.jpg"
import "../styles/profile.css"

export const Profile = () => {
    return (
        <>
        <div className="profile">
            <img className="image" src={image} alt="Error"/>
          <div className="card1">
            <p>Hi, My name is__</p>
            <h1>Ravinder Kumar</h1>
            <h1>I'm a Full Stack Web Developer</h1>
            <button>Resume </button>
          </div>
        </div>
        </>
    )
}