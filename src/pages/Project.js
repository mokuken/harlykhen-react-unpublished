import React from "react";
import '../styles/Project.css';

const Project = () => {
    return (
        <div className="project-container">
            <h3>some of my recent work</h3>
            <h1>PROJECTS</h1>
            <br />
            <div className="content-padding">
                <div className="project-folders">
                    <div className="project-row">
                        <div className="card projectOne">
                            <h2>My Dynamic Window Manager</h2>
                            <p>My patched version of suckless dynamic window manage.</p>
                        </div>
                        <div className="card projectThree">
                            <h2>Lost Dream Game</h2>
                            <p>A game that i made based on the things i remember to my dreams.</p>
                        </div>
                        <div className="card">
                            <p>empty</p>
                        </div>
                    </div>
                    <div className="project-row">
                        <div className="card">
                            <p>empty</p>
                        </div>
                        <div className="card projectTwo">
                            <h2>Library Login System</h2>
                            <p>A login system where it record the daily login of students in the library everyday with cool features.</p>
                        </div>
                        <div className="card">
                            <p>empty</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Project