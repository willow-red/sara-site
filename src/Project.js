import React from 'react';
import './index.css';

export default function Project(props) {
    return (
        <div className="col">
            <a href={props.mainLink} target="_blank" rel="noreferrer" className="text-decoration-none">
                <div className="project">
                    <div className="projectTopBar">
                        <div className="topBarCircle linkDark" style={{ backgroundColor: "var(--theme-red" }}></div>
                        <div className="topBarCircle linkDark" style={{ backgroundColor: "var(--theme-yellow" }}></div>
                        <div className="topBarCircle linkDark" style={{ backgroundColor: "var(--theme-green" }}></div>
                    </div>
                    <img className="projectImg img-fluid" src={require("./assets/" + props.img)} alt={props.alt} />
                    <div className="p-3 lh-sm">
                        <h1 className="projectHeader">{props.projName}</h1>
                        <h2 className="projectSubHeader">{props.projSubHead}</h2>
                        <p className="projectDescription">{props.projDesc}</p>
                        <div className="projectLine"></div>
                        {props.gitLink ? <a href={props.gitLink} target="_blank" rel="noreferrer">
                        <div className="githubSprite link d-inline-block"></div></a> : <div className="emptySprite d-inline-block"></div>}
                        <p className="projectTech d-inline-block text-end float-end">{props.projTech}</p>
                    </div>
                </div></a>
        </div>
    );
}