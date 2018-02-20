import React, { Component } from 'react';
import logo from './rain2o.png';
import './App.css';
import FontAwesome from 'react-fontawesome';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import CardList from './CardList.js';
import {projects} from "./projects";
import {skills} from './skills';
import SkillList from './SkillList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Rain2o Logo" />
          <h1 className="App-title">Joel Rainwater</h1>
          <div className="nav">
            <AnchorLink href="#skills">Skills</AnchorLink>
            <AnchorLink href="#projects">Projects</AnchorLink>
            <AnchorLink href="#links">Links</AnchorLink>
          </div>
        </header>
        <div className="row">
          <p className="App-intro">
            Welcome to my personal portfolio. I have been dabbling with web development since I was a nerdy little middle
            schooler so it's only natural that I end up as a web developer in my career. I did take a little detour as a
            musician, mostly screaming in <a href="https://www.facebook.com/MoriorInvictus/" target="_blank">heavy metal bands</a>,
            but eventually found my way back to the code-for-<span className="strike">money</span>joy lifestyle and I love it.
          </p>
          <p className="App-intro">
            Enough about me, let's talk about me now. I am currently the Senior Dev Architect at&nbsp;
            <a href="https://pyxl.com/" target="_blank">Pyxl</a> where I get to work on a variety of projects in a number
            of technologies. At the moment and over the past few years the majority of my work has involved PHP-based technologies
            such as Magento, WordPress and Laravel. Over the years however I have worked in Swift, C#, Python, React, Angular,
            and a mixture of other technologies as well. So while my portfolio might show a partiality towards PHP I believe
            it is more an indication of the popularity of PHP-based technologies in the region I have been exposed to.
            That being said I truly enjoy learning new technologies and hope to both improve on my current skills and acquire
            new skills as I move forward.
          </p>
        </div>
        <div className="skills row dark" id="skills">
          {/*<div className="skills-inner">*/}
            <h2>Skills</h2>
            <SkillList skills={skills} />
          {/*</div>*/}
        </div>
        <div id="projects" className="card-list row">
          <h2>Projects</h2>
          <CardList projects={projects} />
        </div>
        <div className="profiles row grey" id="links">
            <p>Find out more about me at the following locations.</p>
            <FontAwesome
                className='linkedin profile fa-stack'
                name='linkedin'
                size='2x'
                tag="a"
                href="https://www.linkedin.com/in/joelrainwater/"
                target="_blank"
            />
            <a className="fa-stack fa-lg profile github"
               href="https://github.com/rain2o"
               target="_blank">
                <FontAwesome
                    name="circle"
                    stack="2x"
                    inverse={true}
                />
                <FontAwesome
                    className='github profile'
                    name='github'
                    size='2x'
                    href="https://linkedin.com"
                    stack="1x"
                />
            </a>
            <FontAwesome
                className='profile fa-stack'
                name='stack-overflow'
                size='2x'
                tag="a"
                href="https://stackoverflow.com/users/3489599/rain2o"
                target="_blank"
            />
        </div>
      </div>
    );
  }
}

export default App;
