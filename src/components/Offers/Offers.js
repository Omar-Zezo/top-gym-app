import React, {Component} from 'react';
import OffersImg from '../../imgs/04.jpg';
import FeatOne from '../../imgs/exercise.png';
import FeatTwo from '../../imgs/dumbell.png';
import FeatThree from '../../imgs/stretching-exercises.png';

class Offers extends Component{
    render(){
        return(
            <div id="programs" className="offers">
                <div className="offers-container">
                    <div className="offers-img">
                        <img src={OffersImg} alt="offersImg" />
                        <span className="overlay"></span>
                    </div>                
                    <div className="offers-info">
                        <div className="inner-info">
                            <h6>INTRUDUCE</h6>
                            <h2>All Our Programes</h2>
                            <div className="feat">
                                <img src={FeatOne} alt="" />
                                <div className="details">
                                    <h3>Weight Loose Program</h3>
                                    <p>Get better and faster results with our personal trainers.Reduce muscle tension and pain at our massage sessions.</p>
                                </div>
                            </div>
                            <div className="feat">
                                <img src={FeatTwo} alt="" />
                                <div className="details">
                                    <h3>Bodybuilding Program</h3>
                                    <p>Get better and faster results with our personal trainers.Reduce muscle tension and pain at our massage sessions.</p>
                                </div>
                            </div>
                            <div className="feat">
                                <img src={FeatThree} alt="" />
                                <div className="details">
                                    <h3>Differint Special Classes</h3>
                                    <p>Get better and faster results with our personal trainers.Reduce muscle tension and pain at our massage sessions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Offers;