import React from 'react'
import './header.css'
import {  Link } from 'react-router-dom'



const Header = () => {
    return(
        <div className="head-foot">
            <div className="categories">
                <span id="company">MC Media Ops Control Center</span>
                <Link to ="/premiers"><span className="category">Premiers</span></Link>
                <Link to ="/qa-projects"><span className="category">QA Projects</span></Link>
                
            </div>
            <div className="g-signin2" data-onsuccess="onSignIn"></div>
        </div>
    )
}

export default Header