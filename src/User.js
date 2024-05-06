import React, { Component } from 'react' 
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './user.css'
import backy from "./pictures/yellowuser.png"
import menu from "./pictures/menu.png"
import menuclose from "./pictures/menuclose.png"
import research from "./pictures/research.png"
import leftcal from "./pictures/leftcal.png"
import rightcal from "./pictures/rightcal.png"
import littleuser from "./pictures/littleuser.png"
export default class Home extends Component {
    render() {
        return (
            <div id="usermainspace">
                <img src={backy} id="backgrounduserimg" />
                {/* расположение на странице иконок для показа/скрытия выпадающего меню */}
                <div data-testid="buttonmenuopenuser" className="menuopenuser open">
                    <img src={menu} id="buttonmenuopenuser" data-testid="buttonmenuopenuserclick" title="Скрыть меню"/>
                </div>
                <div className="menucloseuser close">
                    <img src={menuclose} id="buttonmenuclosenuser" title="Показать меню"/>
                </div>
                {/* формирование самого выпадающего меню */}
                <div id="rowforchaptersuser">
                    <div id="firstchapteruser">
                        <div className="containermenu open">
                            <div id="whiteblockuser">
                                <img src={research} id="researchimguser" />
                                <input id="researchinputuser" placeholder="Найти запись..."/>
                            </div>
                            <div id="calendaruser">
                                <div id="blockcaluser">
                                    <div id="arrowsnameusercal">
                                        <img src={leftcal} id="leftcal" />
                                        <h1 id="nameofmonth">
                                            Март
                                        </h1>
                                        <img src={rightcal} id="rightcal" />
                                    </div>
                                    <div id="daysofmonth">
                                        <div id="rowdaysuser">
                                            <h1 id="daysuser">
                                                пн
                                            </h1><h1 id="daysuser">
                                                вт
                                            </h1><h1 id="daysuser">
                                                ср
                                            </h1><h1 id="daysuser">
                                                чт
                                            </h1><h1 id="daysuser">
                                                пт
                                            </h1><h1 id="daysuser">
                                                сб
                                            </h1><h1 id="daysuser">
                                                вс
                                            </h1>
                                        </div>
                                        <div id="rowdaysuser">
                                            <h1 id="daylastuser">
                                                26
                                            </h1><h1 id="daylastuser">
                                                27
                                            </h1><h1 id="daylastuser">
                                                28
                                            </h1><h1 id="daylastuser">
                                                29
                                            </h1><h1 id="daynowuser">
                                                1
                                            </h1><h1 id="daynowuserhol">
                                                2
                                            </h1><h1 id="daynowuserhol">
                                                3
                                            </h1>
                                        </div>
                                        <div id="rowdaysuser">
                                            <h1 id="daynowuser">
                                                4
                                            </h1><h1 id="daynowuser">
                                                5
                                            </h1><h1 id="daynowuser">
                                                6
                                            </h1><h1 id="daynowuser">
                                                7
                                            </h1><h1 id="daynowuser">
                                                8
                                            </h1><h1 id="daynowuserhol">
                                                9
                                            </h1><h1 id="daynowuserhol">
                                                10
                                            </h1>
                                        </div>
                                        <div id="rowdaysuser">
                                            <h1 id="daynowuser">
                                                11
                                            </h1><h1 id="daynowuser">
                                                12
                                            </h1><h1 id="daynowuser">
                                                13
                                            </h1><h1 id="daynowuser">
                                                14
                                            </h1><h1 id="daynowuser">
                                                15
                                            </h1><h1 id="daynowuserhol">
                                                16
                                            </h1><h1 id="daynowuserhol">
                                                17
                                            </h1>
                                        </div>
                                        <div id="rowdaysuser">
                                            <h1 id="daynowuser">
                                                18
                                            </h1><h1 id="daynowuser">
                                                19
                                            </h1><h1 id="daynowuser">
                                                20
                                            </h1><h1 id="daynowuser">
                                                21
                                            </h1><h1 id="daynowuser">
                                                22
                                            </h1><h1 id="daynowuserhol">
                                                23
                                            </h1><h1 id="daynowuserhol">
                                                24
                                            </h1>
                                        </div>
                                        <div id="rowdaysuser">
                                            <h1 id="daynowuser">
                                                25
                                            </h1><h1 id="daynowuser">
                                                26
                                            </h1><h1 id="daynowuser">
                                                27
                                            </h1><h1 id="daynowuser">
                                                28
                                            </h1><h1 id="daynowuser">
                                                29
                                            </h1><h1 id="daynowuserhol">
                                                30
                                            </h1><h1 id="daynowuserhol">
                                                31
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                                <div id="blocknotsuser">
                                    <h1 id="notstodayuser">
                                        Записи в этот день:
                                    </h1>
                                    <div id="zapfottry">
                                        Сегодня я подобрала бездомного щенка
                                    </div>
                                    <div id="zapfottry">
                                        Получила предложение о работе - скорее бы приступить, должность звучит заманчиво и интересно
                                    </div>
                                    <img src={littleuser} id="littleuserimg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="secondchapteruser">
                        <h1 id="zagstarttoday">
                            У вас ещё нет записей, начните сейчас
                        </h1>
                        <ul id="startnowuser">
                            <li><Link to="/user/addnote"><a id="startnowuserbutton">Добавить запись</a></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

document.addEventListener('click', function(e) {
    if (e.target.id=="buttonmenuopenuser") {
        document.querySelector('.containermenu').classList.remove('open');
        document.querySelector('.containermenu').classList.add('close');
        document.querySelector('.menuopenuser').classList.remove('open');
        document.querySelector('.menuopenuser').classList.add('close');
        document.querySelector('.menucloseuser').classList.remove('close');
        document.querySelector('.menucloseuser').classList.add('open');
    }
});
document.addEventListener('click', function(e) {
    if (e.target.id=="buttonmenuclosenuser") {
        document.querySelector('.containermenu').classList.remove('close');
        document.querySelector('.containermenu').classList.add('open');
        document.querySelector('.menuopenuser').classList.remove('close');
        document.querySelector('.menuopenuser').classList.add('open');
        document.querySelector('.menucloseuser').classList.remove('open');
        document.querySelector('.menucloseuser').classList.add('close');
    }
});

// let st
// document.addEventListener('click', function(e) {
//     if (e.target.id=="buttonmenuopenuser") {
//         let statofmenu = document.querySelector('.containermenu').classList.contains('open');
//         // if (statofmenu=="true") {
//         //     console.log("Меню открыто!")
//         // }
//         // else {
//         //     console.log("Меню закрыто!")
//         // }
//         // console.log(statofmenu)
//         st = statofmenu
//     }
//     if (e.target.id=="buttonmenuclosenuser") {
//         let statofmenu = document.querySelector('.containermenu').classList.contains('open');
//         // if (statofmenu=="true") {
//         //     console.log("Меню закрыто!")
//         // }
//         // else {
//         //     console.log("Меню открыто!")
//         // }
//         // console.log(statofmenu)
//         st = statofmenu
//     }
//     console.log(st)
// })