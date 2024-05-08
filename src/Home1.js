import React, { Component } from 'react' 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './home1.css'
import leftflowers from "./pictures/leftflowerswhy.webp"
import rightflowers from "./pictures/rightflowerswhy.webp"

export default class Home extends Component {
    render() {
        return (
            <>
                {/* добавление изображений на задний план страницы */}
                <div id="backgroundimages">
                    <div id="yellowbacksquare" />
                    <div id="flowersleft">
                        <img src={leftflowers} id="leftflowerswhy" />
                    </div>
                    <div id="flowersright">
                        <img src={rightflowers} id="rightflowerswhy" />
                    </div>
                </div>
                <div id="texts">
                    <h2 id="textfirst1">
                        <h1 id="zag1">
                            Почему тебе стоит вести дневник?
                        </h1>
                        <div id="zachemspacehome" />
                        <div id="zachemspacehome" />
                        <p>Это безопасная зона для самовыражения. Здесь вы можете спокойно оставлять самые сокровенные мысли, которые засели в вашей голове, - и никто про них не узнает, никто не осудит.</p>
                        <div id="zachemspacehome" />
                        <p>При ведении личного дневника вы начинаете осознавать свои действия, мысли и эмоции в тех или иных ситуациях. Вы можете посмотреть на себя со стороны и разобраться с причинами поведения, способами решения конфликтных ситуаций, что поможет откорректировать социальное положение.</p>
                        <div id="zachemspacehome" />
                        <p>С течением времени память искажает прошедшие события. Чтобы сохранить впечатления о каких-либо событиях - опишите их в дневнике! Если вы в будущем наткнётесь на эту запись, то сможете вновь пережить волнительные эмоции прожитого когда-то дня.</p>
                        <div id="zachemspacehome" />
                        <div id="zachemspacehome" />
                        <ul id="buttononfirstpage">
                            <li><Link id="buttononfirstpagebutton" to="/login">Зарегистрироваться</Link></li>
                        </ul>  
                    </h2>
                </div>
            </>
        )
    }
}