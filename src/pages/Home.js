import React from 'react';
import profile from '../assets/images/profile.webp';
import ImageLoader from '../components/ImageLoader';

const Home = () => {
  return (
    <section id="home">
      <div className="hero">
        <div className='home-image'>
          <ImageLoader src={profile} alt="profile"/>
        </div>
        <div className="hero-name">
          <h3>hello there i am</h3>
          <h1>HARLY KHEN QUIMELAT</h1>
          <h3>a computer science student and aspiring software engineer!</h3>
        </div>
      </div>
    </section>
  );
};

export default Home;