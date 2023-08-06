import React from 'react';
import './index.css';
import Typed from 'typed.js';

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
                I am passionate about building and designing creative and accessible tech experiences, including
                websites and games.</p>
            <p><a className="link" href="mailto:saraalva7gonz@gmail.com" rel="noreferrer">let's create something! 💌</a></p>
            <br></br>
            <a href="#about" className="link">read more ↓</a>
        </div>
    );
}