import React from 'react'
import Navbar from './Navbar'

const About = () => {
    return (
        <div>
            <Navbar/>
            <div className="aboutSection" id="BettingGuide">
                <h1>Bettin Guide</h1>
            </div>
            <div className="aboutSection" id="Faq">
                <h1>FAQ</h1>
            </div>
            <div className="aboutSection" id="AboutUs">
                <h1>About US</h1>
            </div>
            <div className="aboutSection" id="TheTeam">
                <h1>The team</h1>
            </div>
        </div>
    )
}

export default About
