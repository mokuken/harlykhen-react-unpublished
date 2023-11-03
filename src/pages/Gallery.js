import React from "react";
import '../styles/Contact.css';
import pic1 from '../assets/image/gallery/pic1.webp'
import pic2 from '../assets/image/gallery/pic2.webp'
import pic3 from '../assets/image/gallery/pic3.webp'
import pic4 from '../assets/image/gallery/pic4.webp'
import pic5 from '../assets/image/gallery/pic5.webp'
import pic6 from '../assets/image/gallery/pic6.webp'
import pic7 from '../assets/image/gallery/pic7.webp'

const Contact = () => {
    return (
        <div className="gallery-container">
            <h3>random photos on my</h3>
            <h1>GALLERY</h1>
            <br />
            <div className="content-padding">
                <div className="row"> 
                    <div class="column column-left">
                        <img src={pic1} alt={Image}/>
                        <img src={pic2} alt={Image}/>
                    </div>
                    <div class="column column-middle">
                        <img src={pic3} alt={Image}/>
                        <img src={pic4} alt={Image}/>
                        <img src={pic5} alt={Image}/>
                    </div>
                    <div class="column column-right">
                        <img src={pic6} alt={Image}/>
                        <img src={pic7} alt={Image}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact