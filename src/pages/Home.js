import React from "react";
import ProfileSource from '../assets/image/profile.webp'
import Tooltip from '../components/Tooltip.js';
import LoadProfile from "../components/LoadProfileImage"
import '../styles/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faNodeJs, faGitAlt, faLinux, faJava, faPython } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <div className="home-container">
            <LoadProfile src={ProfileSource} alt={Image} />
            <div className="text">
                <h3>hello there i am</h3>
                <h1>HARLY KHEN QUIMELAT</h1>
                <h3>
                    a computer science student and aspiring
                    software engineer!
                </h3>
                <div class="skillBox">
                    <div class="skillColumn">
                        <Tooltip text="JS">
                            <FontAwesomeIcon className="font-awesome-icon" icon={faJs} />
                        </Tooltip>
                    </div>
                    <div class="skillColumn">
                        <Tooltip text="Node">
                            <FontAwesomeIcon className="font-awesome-icon" icon={faNodeJs} />
                        </Tooltip>
                    </div>
                    <div class="skillColumn">
                        <Tooltip text="React">
                            <FontAwesomeIcon className="font-awesome-icon" icon={faReact} />
                        </Tooltip>
                    </div>
                    <div class="skillColumn">
                        <Tooltip text="Python">
                            <FontAwesomeIcon className="font-awesome-icon" icon={faPython} />
                        </Tooltip>
                    </div>
                    <div class="skillColumn">
                        <Tooltip text="Git">
                            <FontAwesomeIcon className="font-awesome-icon" icon={faGitAlt} />
                        </Tooltip>
                    </div>
                    <div class="skillColumn">
                        <Tooltip text="Linux">
                            <FontAwesomeIcon className="font-awesome-icon" icon={faLinux} />
                        </Tooltip>
                    </div>
                    <div class="skillColumn">
                        <Tooltip text="Java">
                            <FontAwesomeIcon className="font-awesome-icon" icon={faJava} />
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home