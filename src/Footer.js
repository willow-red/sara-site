import React from 'react';
import './index.css';
import Stripe from './Stripe';
export default function Footer() {
    return (
        <div id="footer" className="mt-5">
            <Stripe
                isFooter="true"
            />
            <a href="https://github.com/willow-red" target="_blank" rel="noreferrer"><div className="githubSprite link d-inline-block m-2"></div></a>
            <a href="https://www.linkedin.com/in/saraalva7/" target="_blank" rel="noreferrer"><div className="linkedInSprite link d-inline-block m-2"></div></a>
            <a href="mailto:saraalva7gonz@gmail.com" rel="noreferrer"><div className="emailSprite link d-inline-block m-2"></div></a>
            <div className="link d-inline-block float-end text-end m-2"><a href="#">back to top ↑</a></div>
            <p className="text-center">made with ♥ by Sara Alvarado<br></br>
            built with <a className="link" href="https://react.dev/" target="_blank" rel="noreferrer">react</a> and <a className="link" href="https://getbootstrap.com/" target="_blank" rel="noreferrer">bootstrap</a></p>
        </div>
    );
}