import React, { Component } from 'react' 
import './reviews.css'
import rightflowers from "./pictures/azalia.png"
import leftflowers from "./pictures/rododendron.png"
import coms1 from "./pictures/coms1.png"
import coms2 from "./pictures/coms2.png"
import avs1 from "./pictures/avs1.png"
import avs2 from "./pictures/avs2.png"
import avs3 from "./pictures/avs3.png"
export default class Home extends Component {
    render() {
        return (
            <>
                <div id="backgroundimages">
                    <div id="flowersleftonrews">
                        <img src={leftflowers} id="leftflowerswhyonrews" />
                    </div>
                    <div id="flowersrightonrews">
                        <img src={rightflowers} id="rightflowerswhyonrews" />
                    </div>
                </div>
                <div id="maininfoonrews">
                    <div id="tablemainrews">
                        <div id="blocksrewson">
                            <h1 id="otzyvypos">
                                Отзывы
                            </h1>
                            <div id="blockrews1">
                                <img src={coms1} id="ellipse1" />
                                <div id="collavatex1">
                                    <h2 id="opisrews1">
                                        <p>Никогда не вёл дневники, но недавно понял, что стало сложно разобраться в своих мыслях и отношении к происходящим в жизни вещам. Начал делать записи в обычном гуглдоке, быстро понял, что нужно искать специальный сайт. Выбрал NotABook, потому что можно создать несколько страниц на день – с планами, с отчётом и т. д. Рекомендую!</p>
                                    </h2>
                                    <div id="avatline1">
                                        <img src={avs1} id="avataredit1" />
                                        <h1 id="nameofavs1">
                                            Алексей
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div id="blockrews2">
                                <div id="collavatex2">
                                    <h2 id="opisrews2">
                                        <p>NotABook для меня – настоящая находка! Можно посмотреть на свои мысли и чувства со стороны, проанализировать переживания, понять, что на самом деле тебе нужно. Или кто нужен</p>
                                    </h2>
                                    <div id="avatline2">
                                        <h1 id="nameofavs2">
                                            Юлия
                                        </h1>
                                        <img src={avs2} id="avataredit1" />
                                    </div>
                                </div>
                                <img src={coms2} id="ellipse2" />
                            </div>
                            <div id="blockrews3">
                                <img src={coms1} id="ellipse1" />
                                <div id="collavatex1">
                                    <h2 id="opisrews1">
                                        <p>Если ещё не ведёте дневник, обязательно попробуйте. Это очень крутой инструмент. Фишка: я сейчас изучаю английский, так вот, сперва делаю запись на русском, а потом на соседней странице перевожу её на английский. Помогает продвигаться.</p>
                                    </h2>
                                    <div id="avatline1">
                                        <img src={avs3} id="avataredit1" />
                                        <h1 id="nameofavs1">
                                            Екатерина
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}