import React from "react";
import ProfileSource from '../assets/image/profile.webp'

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
            </div>
        </div>
    )
}
export default Home