import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <footer className="footer">
                <div className="footer-info">
                <p>TOP GYM &copy;2021</p>
                </div>
                <h6>Designed By <span>Omar Abd El-aziz</span></h6>
                <div className="social-media">
                <a href="/"><i className="fab fa-twitter"></i></a>
                <a href="/"><i className="fab fa-facebook-square"></i></a>
                <a href="/"><i className="fab fa-instagram"></i></a>
                <a href="/"><i className="fab fa-youtube"></i></a>
                </div>
            </footer>
        )
    }
}

export default Footer;