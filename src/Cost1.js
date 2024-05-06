import React, { Component } from 'react' 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './cost1.css'
import cost1 from "./pictures/costgroup1.png"
import cost2 from "./pictures/costgroup2.png"
import cost3 from "./pictures/costgroup3.png"
import free from "./pictures/free.png"
export default class Home extends Component {
    render() {
        return (
            <>
                <div id="allitemscost">
                    <div id="colzagcost">
                        Тарифы и цены
                    </div>
                    <div id="rowswithitemscost">
                        <div id="item1free">
                            <img src={cost1} id="cost1cost" />
                            <div id="textinblockcost">
                                <div id="tabletrycost">
                                    <tr id="namecost1">
                                        Бесплатный
                                    </tr>
                                    <tr>
                                        <img src={free} id="freepic" /> 
                                    </tr>
                                    <tr id="opisonsecondpage1">
                                        <p>2 активных дневника</p>
                                        <p>3000 записей в них</p>
                                        <p>10 активных тегов</p>
                                        5.0 GB хранилища
                                    </tr>
                                </div>
                                <div id="buttonsidcost1">
                                    <ul id="buttononsecondpage1">
                                        <li><Link id="buttononsecondpagebutton1" to="/login" className="buttonsclassgorline">Выбрать</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="item1free">
                            <img src={cost2} id="cost1cost" />
                            <div id="textinblockcost">
                                <div id="namecost2">
                                    Расширенный
                                </div>
                                <h1 id="freepic2">
                                    1490 руб /в год
                                </h1>
                                <h1 id="opisonsecondpage2">
                                    <p>5 активных дневников</p>
                                    <p>Записи без ограничений</p>
                                    <p>25 активных тегов</p>
                                    <p>50.0 GB хранилища</p>
                                    <p>Приоритетная поддержка</p>
                                    Помощь проекту
                                </h1>
                                <div id="buttonsidcost1">
                                    <ul id="buttononsecondpage1">
                                        <li><Link id="buttononsecondpagebutton1" to="/login" className="buttonsclassgorline">Выбрать</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="item1free">
                            <img src={cost3} id="cost1cost" />
                            <div id="textinblockcost">
                                <div id="namecost3">
                                    Без ограничений
                                </div>
                                <h1 id="freepic3">
                                    2590 руб /в год
                                </h1>
                                <h1 id="opisonsecondpage3">
                                    <p>Дневники без ограничений</p>
                                    <p>Записи без ограничений</p>
                                    <p>Теги без ограничений</p>
                                    <p>100.0 GB хранилища</p>
                                    <p>Приоритетная поддержка</p>
                                    Помощь проекту
                                </h1>
                                <div id="buttonsidcost1">
                                    <ul id="buttononsecondpage1">
                                        <li><Link id="buttononsecondpagebutton1" to="/login" className="buttonsclassgorline">Выбрать</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    };
}