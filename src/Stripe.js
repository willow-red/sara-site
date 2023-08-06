import React from 'react';
import './index.css';

export default function Stripe(props) {
    if(props.isFooter){
        return (
        <div>
            <div className="footerStripe" style={{ backgroundColor: "var(--theme-red" }}></div>
            <div className="footerStripe" style={{ backgroundColor: "var(--theme-yellow" }}></div>
            <div className="footerStripe" style={{ backgroundColor: "var(--theme-green" }}></div>
        </div>
        );
    }
    return (
        <div>
            <div className="headerStripe" style={{ backgroundColor: "var(--theme-red" }}></div>
            <div className="headerStripe" style={{ backgroundColor: "var(--theme-yellow" }}></div>
            <div className="headerStripe" style={{ backgroundColor: "var(--theme-green" }}></div>
        </div>
    );
}