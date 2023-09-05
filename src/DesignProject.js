import React from 'react';
import './index.css';
import Stripe from './Stripe';
export default function DesignProject(props) {
    return (
        <div>
            <div className="row">
                <h1 className="col-6">{props.title}</h1>
                <p className="col-6 fst-italic">{props.summary}</p>
                <Stripe />
            </div>
            <div className="row mt-4">
                <div className="col-4">
                    <p className="design-project-header-info">ROLE</p>
                    <p>{props.role}</p>
                </div>
                <div className="col-4">
                    <p className="design-project-header-info">TIMELINE</p>
                    <p>{props.timeline}</p>
                </div>
                <div className="col-4">
                    <p className="design-project-header-info">TOOLS</p>
                    <p>{props.tools}</p>
                </div>
            </div>
            <img className="img-fluid mb-4 mt-3" src={require("./assets/" + props.mainImg)} alt={props.title}></img>
            <div>
                {props.link ? <a className="design-project-link link d-block mb-4" href={props.link} target="_blank" rel="noreferrer">see this project →</a> : <p></p>}
            </div>
            <div>
                {props.p1Header ? <DesignProjectSection
                    header={props.p1Header}
                    text={props.p1}
                    img={props.p1Img}
                /> : <p></p>}
            </div>
            <div>
                {props.p2Header ? <DesignProjectSection
                    header={props.p2Header}
                    text={props.p2}
                    img={props.p2Img}
                /> : <p></p>}
            </div>
            <div>
                {props.p3Header ? <DesignProjectSection
                    header={props.p3Header}
                    text={props.p3}
                    img={props.p3Img}
                /> : <p></p>}
            </div>
            <div>
                {props.p4Header ? <DesignProjectSection
                    header={props.p4Header}
                    text={props.p4}
                    img={props.p4Img}
                /> : <p></p>}
            </div>

        </div>
    );
}

function DesignProjectSection(props) {
    return (
        <div>
            <h3>{props.header}</h3>
            <p>{props.text}</p>
            <img className="img-fluid mb-4 mt-3" src={require("./assets/" + props.img)} alt={props.header}></img>
        </div>
    );
}