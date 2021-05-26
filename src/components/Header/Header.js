import React, {Component} from 'react';
import Hero from '../../imgs/hero-1.jpg'
import Motivation from '../../imgs/motivation.mp4'

class Header extends Component{
    hide = ()=>{
        document.querySelector(".motivation").classList.toggle('show')
        document.querySelector(".mot-video").setAttribute("src","")
    }
    show = ()=>{
        document.querySelector(".motivation").classList.add('show')
        document.querySelector(".mot-video").setAttribute("src",Motivation)
    }
    render(){
        return(
            <>
            <div className="motivation">
                <span id="close" onClick={this.hide}>X</span>
                <video className="mot-video" src="" loop autoPlay />
            </div>            
            <div className="intro">
                <img src={Hero} alt="hero" />
                <span className="overlay"></span>
            </div>
            <div className="nav-section">
            <nav>
                <ul>
                    <li><a href="/" className="active">home</a></li>
                    <li><a href="#about">about us</a></li>
                    <li><a href="#plans">Plans</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
            </nav>
                <div className="info">
                    <h1>you only fail,<br/> when you stop<br/> trying.</h1>
                    <q>The harder you work for something, the greater you’ll feel when you achieve it.</q>
                    <button><a href="#programs">Get Started</a></button>
                    <button onClick={this.show}>Get Motivation</button>
                </div>
            </div>
            </>
        )
    }
}

export default Header;