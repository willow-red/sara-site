import React from 'react';
import './App.css';
import Project from './Project';
import { Link } from 'react-router-dom';
export default function Design() {

    return (
        <div>
            <h3 className="mb-4">design ✏️</h3>
            <div className="row row-cols-1 row-cols-lg-2 g-4 mb-5">
                <Link className="desProjectLink" to={"/design/USCStudentLife"}>
                    <Project
                        img="studentLife.png"
                        alt="USC Student Life instagram posts"
                        projName="USC Student Life"
                        projSubHead="Graphic Design/Social Media"
                        projDesc="Social media, merchandise, marketing, and more for USC Student Life."
                        projTech="Figma, Illustrator, Procreate"
                    />
                </Link>
                <Link className="desProjectLink" to={"/design/terrascape"}>
                    <Project
                        img="ui.png"
                        alt="TerraScape"
                        projName="TerraScape"
                        projSubHead="Speculative Design"
                        projDesc="UI design for an environment simulation editor as a
                        critique of climate change."
                        projTech="Blender, Figma, Photoshop"
                    />
                </Link>
                <Link className="desProjectLink" to={"/design/GrowthTracker"}>
                    <Project
                        img="GrowthTracker.png"
                        alt="Growth Tracker Extension"
                        projName="Growth Tracker"
                        projSubHead="Browser Extension (2022)"
                        projDesc="Journal and mood tracker for Firefox and Chrome. Has over 500 users!"
                        projTech="Figma, HTML, CSS"
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
                <Link className="desProjectLink" to={"/design/booklet"}>
                    <Project
                        img="booklet.png"
                        alt="Data safety booklet"
                        projName="Data Privacy Booklet"
                        projSubHead="Graphic/Layout Design (2021)"
                        projDesc="Booklet about privacy and data, featuring original graphics and articles from outside sources."
                        projTech="Illustrator, InDesign"
                    />
                </Link>
            </div>
        </div>
    );
}