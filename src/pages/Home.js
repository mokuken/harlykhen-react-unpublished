import React from "react";
import ProfileSource from '../assets/image/profile.webp'
import Tooltip from '../components/Tooltip.js';
import '../styles/Home.css'; // Make sure to import your CSS file

const Home = () => {
    return (
        <div className="home-container">
            <img className="profile" src={ProfileSource} alt={Image} />
            <div className="text">
                <h3>hello there i am</h3>
                <h1>HARLY KHEN QUIMELAT</h1>
                <h3>
                    a computer science student and aspiring
                    software engineer!
                </h3>
                <div class="skillBox">
                    <div class="skillColumn">
                        <Tooltip text="HTML">
                            <i class="fab fa-html5"></i>
                        </Tooltip>
                    </div>
                    <div class="skillColumn">
                        <Tooltip text="CSS">
                            <i class="fab fa-css3"></i>
                        </Tooltip>
                    </div>
                    <div class="skillColumn">
                        <Tooltip text="JS">
                            <i class="fab fa-js"></i>
                        </Tooltip>
                    </div>
                    <div class="skillColumn">
                        <Tooltip text="DB">
                            <i class="fas fa-database"></i>
                        </Tooltip>
                    </div>
                    <div class="skillColumn">
                        <Tooltip text="GIT">
                            <i class="fa-brands fa-git-alt"></i>
                        </Tooltip>
                    </div>
                    <div class="skillColumn">
                        <Tooltip text="LINUX">
                            <i class="fab fa-linux"></i>
                        </Tooltip>
                    </div>
                    <div class="skillColumn">
                        <Tooltip text="JAVA">
                            <i class="fab fa-java"></i>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home