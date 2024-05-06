import React, { Component } from 'react' 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './Login1';
import Cost from './Cost1';
import Blog from './Blog1';
import Reviews from './Reviews1';
import Zachem from './Zachem';
import User from "./User";
import Addnote from "./Addnote";
import question from "./pictures/question.png"
import pig from "./pictures/pig.png"
import blog from "./pictures/blog.png"
import comment from "./pictures/comment.png"
import login from "./pictures/login.png"
import './sidebar.css'

export default class Home extends Component {
    render() {
        return (
            <>
                <header id="mainspace">
                    <div id="logo">
                        <h1 id="logoname" alt="NotABook">
                            N
                        </h1>
                    </div>
                    <div id="listsidebarforflex">
                        <div id="menulist">
                            <ul id="menudetails">
                                <li><Link to="/" title="Почему стоит вести дневник?"><img src={question} id="buttonimages" class="buttonsidebar1"/></Link></li>
                                <li><Link to="/cost" title="Тарифы и цены"><img src={pig} id="buttonimages" class="buttonsidebar2"/></Link></li>
                                <li><Link to="/blog" title="Блог"><img src={blog} id="buttonimages" class="buttonsidebar3"/></Link></li>
                                <li><Link to="/reviews" title="Отзывы"><img src={comment} id="buttonimages" class="buttonsidebar4"/></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div id="loginflexcol">
                        <div id="login">
                            <ul id="menulogin">
                                <li><Link to="/login" title="Вход/Регистрация"><img src={login} id="buttonimages" class="buttonsidebar5"/></Link></li>
                            </ul>
                        </div>
                    </div>
                </header>
                <div id="mainbackgroundfullscreen" />

                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/cost" element={<Cost/>} />
                    <Route path="/blog" element={<Blog/>} />
                    <Route path="/blog/zachem" element={<Zachem/>} />
                    {/* <Route path="/blog/tags" element={<Tags/>} /> */}
                    <Route path="/reviews" element={<Reviews/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/user" element={<User/>} />
                    <Route path="/user/addnote" element={<Addnote/>} />
                </Routes>
        </>
        )
    }
}