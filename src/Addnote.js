import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './addnote.css'
import lflow from "./pictures/flownotl.png"
import rflow from "./pictures/flownotr.png"
import del from "./pictures/delete.png"
import sav from "./pictures/save.png"
export default class Home extends Component {
    render() {
        return (
            <>
                <div id="addmainspace">
                    <div id="bacsadd">
                        <img src={lflow} id="backgroundaddimgl" />
                        <img src={rflow} id="backgroundaddimgr" />
                    </div>
                    <div id="rowaddnotefull">
                        <div id="colzapandopi">
                            <div id="zagaddnote">
                                <textarea id="zagforaddblock" placeholder='Заголовок записи...' />
                            </div>
                            <div id="opiaddnote">
                                <textarea id="opiforaddblock" placeholder='Опишите свой день/эмоции/впечатления...' />
                            </div>
                        </div>
                        <div id="coliconsadd">
                            <img src={del} id="delicon" />
                            <Link to="/user"><img src={sav} id="savicon" /></Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}