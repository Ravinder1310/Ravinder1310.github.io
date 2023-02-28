import { About } from "./About"
import Contacts from "./Contacts"
import { Github } from "./Github"
import { Profile } from "./Profile"
import { Projects } from "./Projects"
import { Skills } from "./Skills"
import { Tools } from "./tools"


export const Home = () => {
    return (
        <div>
            
            <About/>
            <Skills/>
            <Tools/>
            <Github/>
            <Projects/>
            <Contacts/>
        </div>
    )
}