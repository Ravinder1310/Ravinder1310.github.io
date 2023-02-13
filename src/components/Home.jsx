import { About } from "./About"
import Contacts from "./Contacts"
import { Profile } from "./Profile"
import { Projects } from "./Projects"
import { Skills } from "./Skills"


export const Home = () => {
    return (
        <div>
            
            <About/>
            <Skills/>
            <Projects/>
            <Contacts/>
        </div>
    )
}