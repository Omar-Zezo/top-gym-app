import React, {Component} from 'react';
import AboutImg from '../../imgs/05.jpg'

class About extends Component{
    render(){
        return(
            <div className="about-us" id="about">
                <div className="about-info">
                    <h6>ABOUT TOP GYM</h6>
                    <h1>Welcome To Us</h1>
                    <p> <span>out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th</span><br/><br/>have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                    <br/>
                    <br/>
                    out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th have scrambled parts of Cicero's De Finibus graphic or web designs.
                    </p>
                </div>
                <div className="about-img">
                    <img src={AboutImg} alt="about-us" />
                </div>
            </div>
        )
    }
}

export default About;