import React, {Component} from 'react';

import testTwo from '../../imgs/03.jpg'
import testFour from '../../imgs/06.jpg'
import testFive from '../../imgs/07.jpg'


class News extends Component{
    render(){
        return(
            <div id="news" className="news">
                <h6>Lateast NEWS</h6>
                <h2>Our Lateast News</h2>
                <div className="news-container">
                <div className="news-item">
                    <img src={testTwo} alt="" />
                    <div className="news-info">
                    <h5>powerlifting</h5>
                    <h3>Littile Things Make A Difference</h3>
                    <p>Get better and faster results with our personal trainers.Reduce muscle tension and pain at our massage sessions.</p>
                    </div>
                </div>
                <div className="news-item">
                    <img src={testFour} alt="" />
                    <div className="news-info">
                    <h5>powerlifting</h5>
                    <h3>Littile Things Make A Difference</h3>
                    <p>Get better and faster results with our personal trainers.Reduce muscle tension and pain at our massage sessions.</p>
                    </div>
                </div>
                <div className="news-item">
                    <img src={testFive} alt="" />
                    <div className="news-info">
                    <h5>powerlifting</h5>
                    <h3>Littile Things Make A Difference</h3>
                    <p>Get better and faster results with our personal trainers.Reduce muscle tension and pain at our massage sessions.</p>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default News;