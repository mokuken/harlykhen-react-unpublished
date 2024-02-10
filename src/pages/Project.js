import React from 'react';
import projectOne from '../assets/images/project-one.png';
import projectTwo from '../assets/images/project-two.png';
import ImageLoader from '../components/ImageLoader';

const Project = () => {
  return (
    <section id="project">
      <h1>Some Projects I've Made</h1>
      <div className="project-layer">
        <div className="project-box">
          <ImageLoader src={projectOne} alt="Project One" />
          <div className='project-name fill'>
            <h3>Library Login System</h3>
          </div>
        </div>
        <div className="project-box">
          <ImageLoader src={projectTwo} alt="Project Two" />
          <div className='project-name fill'>
            <h3>Lost Dream Game</h3>
          </div>
        </div>
        <div className="project-box">
          <div className='project-name'>
            <h3>Code Basics</h3>
          </div>
        </div>
      </div>
      <div className="project-layer">
        <div className="project-box">
          <div className='project-name'>
            <h3>Empty</h3>
          </div>
        </div>
        <div className="project-box">
          <div className='project-name'>
            <h3>Empty</h3>
          </div>
        </div>
        <div className="project-box">
          <div className='project-name'>
            <h3>Empty</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;