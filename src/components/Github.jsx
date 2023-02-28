import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import {Center, Image, SimpleGrid} from "@chakra-ui/react";
import "../styles/github.css"
export const Github = () => {
  return (
    <div id='Github' className='git'>
        <h1>Github</h1>
    <div className='github' >
        
        <Center>
                <GitHubCalendar username="ravinder1310"/>
            </Center> 
            <SimpleGrid w={"70%"} margin="auto" alignItems="center" columns={[1,1,2,2]} gap="10px" marginTop={"40px"}>
            <Center>
                <Image src='https://github-readme-stats.vercel.app/api?username=ravinder1310&count_private=true&show_icons=true&theme=radical'/>
            </Center>
            <Center>
                <Image src='https://github-readme-streak-stats.herokuapp.com/?user=ravinder1310'/>
            </Center>
            </SimpleGrid>

    </div>
    </div>
  )
}
