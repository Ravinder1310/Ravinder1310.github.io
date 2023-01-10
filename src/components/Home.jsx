import { About } from "./About"
import { Profile } from "./Profile"
import { Skills } from "./Skills"


export const Home = () => {
    return (
        <div>
            <Profile/>
            <About/>
            <Skills/>
        </div>
    )
}