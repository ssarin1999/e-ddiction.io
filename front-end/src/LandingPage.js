import React from 'react';
import './LandingPage.css';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import sticker from './Images/video-sticker.png';

import league from './Images/league.png';
import fortnite from './Images/fortnite.png';
import ig from './Images/ig.png';
import sc from './Images/sc.png';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleSlide = this.handleSlide.bind(this);
  }
  handleSlide(event){
    window.onload = 
    function(){
      setTimeout(
        function(){
        document.getElementsByClassName("Page")[0].style.maxHeight="100%"
        }.bind(this),3000);
    }
 }
  render(){
    return (
      <div className="container">
        <div className="intro">
          <h1 class="welcome">WELCOME TO <br/> <span class="bigger">EDDICTION</span></h1>
        </div>
      <div className="Page" id="slider">
      <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:wght@700&display=swap" rel="stylesheet"></link>
    <nav className="navbar">
       <Router>
            <NavLink exact to="/" activeClassName="active" className="navlink">HOME</NavLink>
            <NavLink exact to="/" activeClassName="active" className="navlink">TESTIMONIALS</NavLink>
            <NavLink exact to="/" activeClassName="active" className="navlink">RESOURCES</NavLink>
            <NavLink exact to="/" activeClassName="active" className="navlink">LOGIN</NavLink>
            
      <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={450}
              classNames="fade"
            >        
     <Switch location={location}>
        {/*<Route exact path='/'component={Home}/>*/}
    </Switch>

      </CSSTransition>
          </TransitionGroup>
        )} />

      </Router>
    </nav>

    <div className="top-design">
      <div className="shape1"></div>
      <div className="shape2"></div>
      <div className="shape3"></div>
      <div className="shape4"></div>
      <div className="shape5"></div>
  </div>

    <div className="define">
      <h2 className="word"><span className="title">EDDICTION</span> noun</h2>
      <p className="pronounciation">e -ˈdik-shən</p>
      <p className="definition"> 1. Lorem ipsum dolor sit amet <br/><br/>
          2. Lorem ipsum dolor sit amet
    </p>
    </div>
    <div className="video-animation">
      <img src={sticker}/>
    </div>
    <div className="seperation">
    </div>
    <div className="addictions">
          <a href="">
            <img src={league}/>
          </a>
          <a href="">
            <img src={fortnite}/>
          </a>
          <a href="">
            <img src={ig}/>
          </a>
          <a href="">
            <img src={sc}/>
          </a>
    </div> 
    {this.handleSlide()}
    </div>
    </div>
   
    
  );
}
}

export default LandingPage;
