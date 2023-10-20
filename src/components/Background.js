import React from "react";
import videoSource from '../assets/video/bgv.mp4'

const BackgroundVideo = () => {
    return <video className="backgroundVideo" src={videoSource} autoPlay loop muted/>
}

export default BackgroundVideo