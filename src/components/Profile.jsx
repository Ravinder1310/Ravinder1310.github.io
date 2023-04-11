import image from "../Images/slackImg.png"
import "../styles/profile.css"
// import { Resume } from "./Resume"
import { Resume2 } from "./resume2"
import "../styles/button.css"

export const Profile = () => {

    return (
        <div id="Home">
        <div className="profile" >
            <img className="image" src={image} alt="Error"/>
          <div className="card1">
            <p>Hi, My name is__</p>
            <h1>Ravinder Kumar</h1>
            <h1>I'm a Full Stack Web Developer</h1>
            <button className="button-85"><Resume2/> </button>
          </div>
        </div>
        </div>
    )
}