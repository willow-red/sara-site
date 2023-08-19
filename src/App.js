import * as React from 'react';
import './App.css';
import Project from './Project';
import Nav from './Nav';
import About from './About';
import Home from './Home';
import Footer from './Footer';
function App() {
  return (
    <div className="App container">
      <div className="row">
        <Nav />
        <div className="contentContainer col-lg-10">
          <Home />
          <h3 id="projects" className="mb-4 mt-5">projects 📂</h3>
          <div className="row row-cols-1 row-cols-lg-2 g-4 mb-5">
          <Project
              img="portal.png"
              alt="Portal Game"
              projName="Portal Clone"
              projSubHead="Recreation of Portal(2023)"
              projDesc="Features include 3d graphics, FPS camera, AI state machine, teleport physics,
              JSON parsing."
              projTech="C++"
              mainLink="https://willow-red.github.io/games-site/portal/Lab12.html"
            />
          <Project
              img="marioKart.png"
              alt="Mario Kart Game"
              projName="Mario Kart Clone"
              projSubHead="Recreation of Mario Kart(2023)"
              projDesc="Features 3d graphics, AI driven opponent, vehicle physics, and
              springy follow camera."
              projTech="C++"
              mainLink="https://willow-red.github.io/games-site/marioKart/Lab08.html"
            />
          <Project
              img="zelda.png"
              alt="Zelda Mini Game"
              projName="Zelda Clone"
              projSubHead="Recreation of Zelda: A Link to the Past(2023)"
              projDesc="A snippet of the original game. Features
              A* pathfinding algorithm and texture tiling."
              projTech="C++"
              mainLink="https://willow-red.github.io/games-site/zelda/Lab06.html"
            />
            <Project
              img="GrowthTracker.png"
              alt="Growth Tracker Extension"
              projName="Growth Tracker"
              projSubHead="Browser Extension (2022)"
              projDesc="Journal and mood tracker for Firefox and Chrome. Has over 500 users!"
              projTech="JavaScript, HTML, CSS"
              gitLink="https://github.com/Namesnipes/Growth-Tracker"
              mainLink="https://chrome.google.com/webstore/detail/growth-tracker/pkbbochahepbkpkkidbhhdjhmjafgncm"
            />
            <Project
              img="USCRacing.png"
              alt="USC Racing website"
              projName="USC Racing Website"
              projSubHead="Website Design (2022)"
              projDesc="Redesigned website for USC Racing Team as a team project. Implemented with Wix."
              projTech="Figma, Wix"
              mainLink="https://www.uscformulasae.com/"
            />
            <Project
              img="gameOfLife.png"
              alt="Conway's Game of Life"
              projName="Game of Life"
              projSubHead="Web (2022)"
              projDesc="Game simulates populations using a grid and cells."
              projTech="JavaScript, HTML, CSS"
              gitLink="https://github.com/willow-red/GameOfLife"
              mainLink="https://willow-red.github.io/GameOfLife/"
            />
            <Project
              img="hiStress.png"
              alt="hi-Stress game"
              projName="hi-Stress"
              projSubHead="Web (2022)"
              projDesc="Try to balance different aspects of college life."
              projTech="HTML, CSS"
              gitLink="https://github.com/Namesnipes/hiStress"
              mainLink="https://devpost.com/software/hi-stress"
            />
            <Project
              img="seeingSoftware.png"
              alt="seeing software"
              projName="Seeing Software"
              projSubHead="Web (2022)"
              projDesc="Art project using ml5.js AI object detection."
              projTech="HTML, CSS, ml5"
              gitLink="https://github.com/willow-red/object-recognition"
              mainLink="https://willow-red.github.io/object-recognition/"
            />
          </div>
          <About />
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
