import React from "react";
import ProfileSource from '../assets/image/profile.webp'
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
                        <i class="fab fa-html5"></i>
                    </div>
                    <div class="skillColumn">
                        <i class="fab fa-css3"></i>
                    </div>
                    <div class="skillColumn">
                        <i class="fab fa-js"></i>
                    </div>
                    <div class="skillColumn">
                        <i class="fas fa-database"></i>
                    </div>
                    <div class="skillColumn">
                        <i class="fa-brands fa-git-alt"></i>
                    </div>
                    <div class="skillColumn">
                        <i class="fab fa-linux"></i>
                    </div>
                    <div class="skillColumn">
                        <i class="fab fa-java"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home