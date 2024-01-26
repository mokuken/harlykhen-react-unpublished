import React from 'react';
import profile from '../assets/images/profile.webp';

const Home = () => {
  return (
    <section id="home">
      <div className="hero">
        <img src={profile} alt="Profile" />
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