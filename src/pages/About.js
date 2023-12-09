import React from "react";
import LoadImage from '../components/LoadImage.js';
import me from '../assets/image/me.gif'
import '../styles/About.css';

const About = () => {
    return (
        <div>
            <h3>all you need to know</h3>
            <h1>ABOUT ME</h1>
            <br />
            <div className="content-padding">
                <div className="about-main-container">
                    <LoadImage src={me} alt={Image}/>
                    <p><h1>Hello friend,</h1>welcome to my place! You may already know my name but i also known as Moku Ken, my 2nd perosnality that i created, im 20 years old taking 4 years of computer science in college and i'm currently focusing on my self-improvement and improving my programming skills.
                    <hr />
                    As a young person just starting out on life, there are a lot of things I don't know yet. But that's ok - there's always room for improvement. And that's what this website is all about - sharing my experiences, successes, and mistakes so that you can gain the knowledge and skills you need to be successful too.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default About