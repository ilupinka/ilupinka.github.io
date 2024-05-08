import './sidebar.css'
import user from "./pictures/login.webp"
import logout from "./pictures/logout.webp"

import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <>
            <header id="mainspace">
                <div id="logo">
                    <Link to="/"><h1 id="logoname" title="NotABook">
                        N
                    </h1></Link>
                </div>
                <div id="listsidebarforflex">
                    <div id="menulist">
                        <ul id="menudetails">
                            <li><Link to="/user" title="Дневник"><img src={user} id="buttonimages" className="buttonsidebar3"/></Link></li>
                            <li><Link to="/" title="Выход"><img src={logout} id="buttonimages" className="buttonsidebar4"/></Link></li>
                        </ul>
                    </div>
                </div>
                <div id="loginflexcol" />
            </header>
            <div id="mainbackgroundfullscreen" />
        </>
        )
    }
}