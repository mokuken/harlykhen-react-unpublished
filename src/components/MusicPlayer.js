import React, { useState } from 'react';
import '../styles/MusicPlayer.css'; // Make sure to import your CSS file
import audioSource from '../assets/audio/bgm.mp3'
import thumbSource from '../assets/image/bgm-thumbnail.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

const YourComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    const audio = document.getElementById("myAudio");
    const spotifyIcon = document.getElementById("spotifyIcon");
    const barAnim1 = document.getElementById("bar1");
    const barAnim2 = document.getElementById("bar2");
    const barAnim3 = document.getElementById("bar3");
    const playerButton = document.getElementById("player");
    const playIndicator = document.getElementById("play");
    const music = document.getElementById("music-name");

    if (audio.paused) {
      audio.play();
      spotifyIcon.classList.add("active");
      barAnim1.classList.add("active");
      barAnim2.classList.add("active");
      barAnim3.classList.add("active");
      playerButton.classList.add("active");
      playIndicator.style.display = "none";
      music.style.display = "block";
    } else {
      audio.pause();
      spotifyIcon.classList.remove("active");
      barAnim1.classList.remove("active");
      barAnim2.classList.remove("active");
      barAnim3.classList.remove("active");
      playerButton.classList.remove("active");
      playIndicator.style.display = "block";
      music.style.display = "none";
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div id="player" className={`music-container spotifyBackground ${isPlaying ? 'active' : ''}`} onClick={handleTogglePlay}>
      <div className="art">
        <img className="image" src={thumbSource} alt="thumbnail" />
        <div className="overlay_box">
          <FontAwesomeIcon id='spotifyIcon' className='spotifyIcon' icon={faSpotify} />
          <div id="bar1" className="bar"></div>
          <div id="bar2" className="bar"></div>
          <div id="bar3" className="bar"></div>
        </div>
      </div>
      <div className="music-detail">
        <div id="play">Play Music</div>
        <div id="music-name">
          <div className="title">Vamp</div>
          <div className="artist">fwsatoru</div>
        </div>
      </div>
      <audio id="myAudio" src={audioSource} loop></audio>
    </div>
  );
};

export default YourComponent;
