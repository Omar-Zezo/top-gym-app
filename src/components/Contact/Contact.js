import React, {Component} from 'react';
import ContactImg from '../../imgs/contact.jpg'

class Contact extends Component{
    render(){
        return(
            <div id="contact" className="contact">
                <img src={ContactImg} alt="ContactImg" />
                <span className="overlay"></span>
                <div className="contact-info">
                    <h6>CALL US TODAY</h6>
                    <h2>+8 (800) 689 3469</h2>
                    <p>Get better and faster results with our and pain at our massage sessions Get better and faster results with our personal trainers.Reduce muscle tension and pain at our massage sessions.</p>
                    <button>CALL US NOW</button>
                </div>
            </div>
        )
    }
}

export default Contact;