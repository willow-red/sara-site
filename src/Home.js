import React from 'react';
import './index.css';
import Typed from 'typed.js';
import Project from './Project';
import { Link } from 'react-router-dom';

export default function Home() {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['<h1>hi, I\'m Sara *･ﾟ☆</h1>'],
            typeSpeed: 70,
            showCursor: false,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <div id="home" className="mb-5">
            <div id="homeHeader" className="mb-4"><span ref={el} /></div>
            <p>I'm a developer, designer, and artist currently studying at USC.<br></br>
                I am passionate about building and designing creative and accessible tech experiences.</p>
            <p><a className="link" href="mailto:saraalva7gonz@gmail.com" rel="noreferrer">let's create something! 💌</a></p>
            <br></br>
            <Link to="/about" className="link">read more →</Link>
            <h3 className="mt-5 mb-3">featured ⭐</h3>
            <div className="row row-cols-1 row-cols-lg-2 g-4 mb-5">
                <Link className="desProjectLink" to={"/design/GrowthTracker"}>
                    <Project
                        img="GrowthTracker.png"
                        alt="Growth Tracker Extension"
                        projName="Growth Tracker"
                        projSubHead="Browser Extension (2022)"
                        projDesc="Journal and mood tracker for Firefox and Chrome. Has over 500 users!"
                        projTech="JavaScript, HTML, CSS"
                        gitLink="https://github.com/Namesnipes/Growth-Tracker"
                    />
                </Link>
                <Link className="desProjectLink" to={"/design/USCRacing"}>
                    <Project
                        img="USCRacing.png"
                        alt="USC Racing website"
                        projName="USC Racing Website"
                        projSubHead="Website Design (2022)"
                        projDesc="Redesigned website for USC Racing Team as a team project. Implemented with Wix."
                        projTech="Figma, Wix"
                    />
                </Link>
            </div>
        </div>
    );
}