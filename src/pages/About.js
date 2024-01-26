import React from 'react';
import coffee from '../assets/images/coffee.jpg';

const Home = () => {
  return (
    <section id="about">
      <div className="about-layer">
        <img src={coffee} alt="coffee" />
        <article>
          <h1>About Myself</h1>
          <p>My name is Harly Khen and I'm 20 years old, i live in the province of Jamindan, Capiz, Philippines.</p>
          <br/>
          <p>I'm a college student, currently studying 4 years of computer science.</p>
          <br/>
          <p>I love cats, coffee, coding, read books, and watching anime.</p>
        </article>
      </div>
    </section>
  );
};

export default Home;