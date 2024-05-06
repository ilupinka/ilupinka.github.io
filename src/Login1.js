import React, { Component, useContext, useState } from 'react'
import { ProfileContext } from './ProfileProvider'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './login.css'
import Leftbar from "./leftbar";
import siren from "./pictures/siren.png";

export default function Login1 () {
    const {userId, setUserId} = useContext(ProfileContext);
    const [isLogin, setIsLogin] = useState(false);

    function handleClick () {
        setIsLogin(!isLogin);
        console.log(userId);
        setUserId(1);
    }

    return (
        <>
        <Leftbar />
        <div id="mainspaceonlogin">
            <div id="mainelemonlogin open">
                <div className={"firstpagelogin " + (isLogin ? "open" : "close")}>
                    <div id="leftchapterlogin">
                        <img src={siren} id="sirenimage" />
                        <div id="whiteblockleft">
                            <h1 id="vhodlogin">
                                Вход в аккаунт
                            </h1>
                            <label for="nameofuserlogin" id="labelfornamelogin">Имя пользователя:</label>
                            <input id="nameofuserlogin">
                                
                            </input>
                            <label for="passwordofuserlogin" id="labelforpasswordlogin">Пароль:</label>
                            <input id="passwordofuserlogin">

                            </input>
                            {/* <h1 id="dontremember">
                                Забыли пароль?
                            </h1> */}
                            <ul id="loginlogin">
                                <li><Link id="loginloginbutton" to="/user">Войти</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div id="rightchapterlogin">
                        <div id="textrightloginreg">
                            <h1 id="registernameright">
                                Мы всегда рады новым пользователям!
                            </h1>
                            <h1 id="opisloginright">
                                Заполните необходимые для регистрации поля и начните вести дневник прямо сейчас
                            </h1>
                            <ul id="regregchangeright">
                                <li><a id="regregchangerightbutton" className="secondpageshow" onClick={handleClick}>Зарегистрироваться</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className={"secondpagelogin " + (isLogin ? "close" : "open")}>
                    
                    <div id="rightchapterreg">
                        <img src={siren} id="sirenimagereg" />
                        <div id="whiteblockleftreg">
                            <h1 id="vhodreg">
                                Регистрация
                            </h1>
                            <label for="nameofuserreg" id="labelfornamereg">Имя пользователя:</label>
                            <input id="nameofuserreg">
                                
                            </input>
                            <label for="emailofuserreg" id="labelforemailreg">Почта:</label>
                            <input id="emailofuserreg">
                                
                            </input>
                            <label for="passwordofuserreg" id="labelforpasswordreg">Пароль:</label>
                            <input id="passwordofuserreg">

                            </input>
                            <label for="password2ofuserreg" id="labelforpassword2reg">Подтверждение пароля:</label>
                            <input id="password2ofuserreg">

                            </input>
                            {/* <h1 id="dontremember">
                                Забыли пароль?
                            </h1> */}
                            <ul id="regreg">
                                <li><Link id="regregbutton" to="/user">Зарегистрироваться</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div id="leftchapterreg">
                        <div id="textrightregreg">
                            <h1 id="registernamerightreg">
                                С возвращением!
                            </h1>
                            <h1 id="opisregright">
                                Войдите в свой аккаунт, чтобы оставаться с нами на связи
                            </h1>
                            <ul id="regregchangerightreg">
                                <li><a id="regregchangerightbuttonreg" className="firstpageshow" onClick={handleClick}>Войти</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}