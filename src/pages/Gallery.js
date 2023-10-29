import React from "react";
import '../styles/Contact.css';
import pic1 from '../assets/image/gallery/pic1.png'
import pic2 from '../assets/image/gallery/pic2.png'
import pic3 from '../assets/image/gallery/pic3.png'
import pic4 from '../assets/image/gallery/pic4.png'
import pic5 from '../assets/image/gallery/pic5.png'
import pic6 from '../assets/image/gallery/pic6.png'
import pic7 from '../assets/image/gallery/pic7.png'

const Contact = () => {
    return (
        <div>
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