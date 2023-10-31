import React from "react";
import '../styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <div className="contact-container">
            <h3>if you have business, you have my</h3>
            <h1>CONTACT</h1>
            <br />
            <div className="content-padding">
                <div className="contact-coloumn contact-padding">
                    <a href="https://harlykhen@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-box card card-left">
                        <FontAwesomeIcon className="sideSep" icon={faAt} /> Email
                    </a>
                    <a href="https://github.com/mokuken" target="_blank" rel="noopener noreferrer" className="contact-box card card-middle">
                        <FontAwesomeIcon className="sideSep" icon={faGithub} /> Github
                    </a>
                    <a href="https://m.facebook.com/people/Harly-Khen-V-Quimelat/100034130554707/?comment_id=Y29tbWVudDoxMTUwODQyMTM1NzY0MjhfMTE2NDQwMjYzNDQwODIz" target="_blank" rel="noopener noreferrer" className="contact-box card card-middle">
                        <FontAwesomeIcon className="sideSep" icon={faFacebook} /> Facebook
                    </a>
                    <a href="https://www.linkedin.com/in/harlykhen" target="_blank" rel="noopener noreferrer" className="contact-box card card-right">
                        <FontAwesomeIcon className="sideSep" icon={faLinkedin} /> Linkedin
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Contact