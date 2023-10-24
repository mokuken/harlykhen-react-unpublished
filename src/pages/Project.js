import React from "react";
import ProjectImageSourceOne from '../assets/image/projects.webp'
import ProjectImageSourceTwo from '../assets/image/project-2.webp'

const Project = () => {
    return (
        <div>
            <h3>some of my recent work</h3>
            <h1>PROJECTS</h1>
            <br />
            <div className="projCont">
                <div className="card">
                    <img src={ProjectImageSourceOne} alt="" />
                    <h3>Dynamic Window Manager (DWM)</h3>
                    <p>My patched version of suckless dynamic window manage.</p>
                </div>
                <div className="card">
                    <img src={ProjectImageSourceTwo} alt="" />
                    <h3>Lost Dream Game</h3>
                    <p>
                        A game that i made based on the things i remember to my dreams.
                    </p>
                </div>
                <div className="card">
                    <img
                    className="inactive"
                    src={ProjectImageSourceOne}
                    alt=""
                    />
                    <h3>Empty</h3>
                    <p>Nothing its Empty</p>
                </div>
            </div>
            <div className="projCont">
                <div className="card">
                    <img
                    className="inactive"
                    src={ProjectImageSourceOne}
                    alt=""
                    />
                    <h3>Empty</h3>
                    <p>Nothing its Empty</p>
                </div>
                <div className="card">
                    <img
                    className="inactive"
                    src={ProjectImageSourceOne}
                    alt=""
                    />
                    <h3>Empty</h3>
                    <p>Nothing its Empty</p>
                </div>
                <div className="card">
                    <img
                    className="inactive"
                    src={ProjectImageSourceOne}
                    alt=""
                    />
                    <h3>Empty</h3>
                    <p>Nothing its Empty</p>
                </div>
            </div>
        </div>
    )
}
export default Project