import React from 'react';
import coffee from '../assets/images/coffee.jpg';
import ImageLoader from '../components/ImageLoader';

const Home = () => {
  return (
    <section id="about">
      <div className="about-layer">
        <div className='about-image'>
          <ImageLoader src={coffee} alt="Alt text"/>
        </div>
        <article>
          <h1>About Myself</h1>
          <p>My name is Harly Khen and I'm 20 years old, i live in the province of Jamindan, Capiz, Philippines.</p>
          <br/>
          <p>I'm a 3rd year college student, currently studying computer science.</p>
          <br/>
          <p>I love coffee, coding, read books, and watching anime and most importantly self-improvement.</p>
        </article>
      </div>
    </section>
  );
};

export default Home;