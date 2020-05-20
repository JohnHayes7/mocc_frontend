import React from 'react'
import './header.css'
import { Redirect, Link } from 'react-router-dom'



const Header = () => {
    return(
        <div className="head-foot">
            <div className="categories">
                <span id="company">MC Media Ops Control Center</span>
                <Link to ="premiers"><span className="category">Premiers</span></Link>
                <Link to ="/qa-projects"><span className="category">QA Projects</span></Link>
            </div>
        </div>
    )
}

export default Header