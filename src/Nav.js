import React from 'react';
import './index.css';

export default function Nav() {
    return (
        <div className="NavBar lh-lg text-lg-end col-lg-2 pe-lg-4 mb-4">
            <a href="#" className="navItem link">./home</a>
            <a href="#projects" className="navItem link">./projects</a>
            <a href="#about" className="navItem link">./about</a>
            <a href="https://drive.google.com/file/d/1AypO-5eEpSkGZyb8f7XPse1op22lexuv/view?usp=sharing" target="_blank" rel="noreferrer" className="navItem link">./resume</a>
        </div>
    );
}