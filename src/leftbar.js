import './sidebar.css'
import question from "./pictures/question.webp"
import pig from "./pictures/pig.webp"
import blog from "./pictures/blog.webp"
import comment from "./pictures/comment.webp"
import login from "./pictures/login.webp"

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
                            <li><Link to="/" title="Почему стоит вести дневник?"><img src={question} id="buttonimages" className="buttonsidebar1"/></Link></li>
                            <li><Link to="/cost" title="Тарифы и цены"><img src={pig} id="buttonimages" className="buttonsidebar2"/></Link></li>
                            <li><Link to="/blog" title="Блог"><img src={blog} id="buttonimages" className="buttonsidebar3"/></Link></li>
                            <li><Link to="/reviews" title="Отзывы"><img src={comment} id="buttonimages" className="buttonsidebar4"/></Link></li>
                        </ul>
                    </div>
                </div>
                <div id="loginflexcol">
                    <div id="login">
                        <ul id="menulogin">
                            <li><Link to="/login" title="Вход/Регистрация"><img src={login} id="buttonimages" className="buttonsidebar5"/></Link></li>
                        </ul>
                    </div>
                </div>
            </header>
            <div id="mainbackgroundfullscreen" />
        </>
        )
    }
}