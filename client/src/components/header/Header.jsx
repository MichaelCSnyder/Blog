import './header.css';
import React from 'react';


export default function Header() {
    // console.log(state);
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">The World Needs To Hear</span>
                <span className="headerTitleLg">This</span>
            </div>
            <img src="https://images.unsplash.com/photo-1554477717-cad0b36509e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className="headerImage" />
        </div>
    )
};