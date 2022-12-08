import React from 'react'
import '../App.css'
import Sketch from '../sketch.png';
import Persona from '../Personas-3.png'
const Project1 = () => {
    return (
        <div className="App">
            <div className="App-header">
                <div class="project1">Project 1</div>
                <div class="project1-title">Personas and Storyboarding</div>
                <img src={Sketch} width="500px" height="500px" margin-left="150px"/>
                <div class="Link"><a href="https://joyfultiger555.github.io/Personas-Storyboarding/">Deployed Website Link</a></div>
                <div class="project1-header-title">Premise:</div>
                <div class="project1-header">For this project we were tasked with finding an interface used in everyday life<br/>
                and then observing people using the interface. Through these observations we wanted to be able to<br/>
                come up with patterns for the usage of the interface as well as user personas<br/> in order to capture the user's 
                state of mind while they are using the interface.</div>

                <div class="project1-header-title">Details:</div>
                <div class="project1-header"></div>
            </div>
        </div>
    )
}
export default Project1