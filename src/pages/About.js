import React from "react";
import me from '../assets/image/me.jpg'
import call from '../assets/image/call.jpg'
import '../styles/About.css';
import LoadImage from '../components/LoadImage.js';
import '../styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faAt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    return (
        <div>
            <h3>all you need to know</h3>
            <h1>ABOUT ME</h1>
            <br />
            <div className="content-padding">
                <div className="about-main-container">
                    <LoadImage src={me}/>
                    <article>
                        <h1>Hello friend,</h1>
                        <br />
                        <p>welcome to my place! You may already know my name but i also known as Moku Ken in Linux/Youtube community, im 20 years old taking 4 years of computer science in college and i'm currently focusing on my self-improvement and improving my programming skills.</p>
                        <br />
                        <p>As a young person just starting out on life, there are a lot of things I don't know yet. But that's ok - there's always room for improvement. And that's what this website is all about - sharing my experiences, successes, and mistakes so that you can gain the knowledge and skills you need to be successful too.
                        </p>
                    </article>
                </div>
                <br />
                <h3>if you have business, you have my</h3>
                <h1>CONTACT</h1>
                <br />
                <div className="about-main-container">
                    <div className="contact-coloumn">
                        <a href="https://harlykhen@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-box card card-left">
                            <FontAwesomeIcon className="sideSep" icon={faAt} /> Email <FontAwesomeIcon className="leftIcon" icon={faArrowUpRightFromSquare} />
                        </a>
                        <a href="https://github.com/mokuken" target="_blank" rel="noopener noreferrer" className="contact-box card card-middle">
                            <FontAwesomeIcon className="sideSep" icon={faGithub} /> Github <FontAwesomeIcon className="leftIcon" icon={faArrowUpRightFromSquare} />
                        </a>
                        <a href="https://m.facebook.com/people/Harly-Khen-V-Quimelat/100034130554707/?comment_id=Y29tbWVudDoxMTUwODQyMTM1NzY0MjhfMTE2NDQwMjYzNDQwODIz" target="_blank" rel="noopener noreferrer" className="contact-box card card-middle">
                            <FontAwesomeIcon className="sideSep" icon={faFacebook} /> Facebook <FontAwesomeIcon className="leftIcon" icon={faArrowUpRightFromSquare} />
                        </a>
                        <a href="https://www.linkedin.com/in/harlykhen" target="_blank" rel="noopener noreferrer" className="contact-box card card-right">
                            <FontAwesomeIcon className="sideSep" icon={faLinkedin} /> Linkedin <FontAwesomeIcon className="leftIcon" icon={faArrowUpRightFromSquare} />
                        </a>
                    </div>
                    <LoadImage src={call} />
                </div>
            </div>
        </div>
    )
}
export default About