import React, { Component } from 'react' 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './tags.css'
import Zachem from "./Zachem"
import leftflowers from "./pictures/leftflowersblog.png"
import rightflowers from "./pictures/rightflowersblog.png"
import pencil from './pictures/pencil.png'
import blogpic1 from './pictures/blogpic1.png'
import blogpic2 from './pictures/blogpic2.png'
import blogpic3 from './pictures/blogpic3.png'
import timeclock from './pictures/time.png'
export default class Home extends Component {
    render() {
        return (
            <>
                <div id="buttonslistforfilter">
                    <button class="buttonfilterall all" onclick="filterSelection('all')">ВСЕ ТЭГИ</button>
                    <button class="buttonfilter1 ins">ИНСТРУКЦИЯ</button>
                    <button class="buttonfilter2 zdo">ЗДОРОВЬЕ</button>
                    <button class="buttonfilter3 pra">ПРАКТИКА</button>
                    <button class="buttonfilter4 psy">ПСИХОЛОГИЯ</button>
                    <button class="buttonfilter5 sam">САМОРАЗВИТИЕ</button>
                    <button class="buttonfilter6 tvo">ТВОРЧЕСТВО</button>
                </div>

                <div>
                    <div id="filterbackgroundimages">
                        <div id="filterflowersleft">
                            <img src={leftflowers} id="filterleftflowersblog" />
                        </div>
                        <div id="filterflowersright">
                            <img src={rightflowers} id="filterrightflowersblog" />
                        </div>
                    </div>
                    <div class="filtertextsblog1 ins zdo psy">
                        <div id="filtersquarethirdpage1" />
                        <div id="filterblogpics">
                            <Link to="/blog/zachem">
                                <img src={blogpic1} id="filterblogpic1" />
                            </Link>
                        </div>
                        <Link to="/blog/zachem" id="filterzagthirdblog1">
                            Зачем люди ведут дневники и когда такая практика может помочь?
                        </Link>
                        <h3 id="filtertextthirdblog1">
                            Многим людям по всему миру в последнее время гораздо сложнее упорядочить свою жизнь и проанализировать то, что уже случилось. Это абсолютно нормально в ситуации крайней неопределенности и постоянного стресса, однако есть способы себе помочь — например, завести дневник.
                        </h3>
                        <div id="filtertagsthirdpageblog">
                            <ul id="filtertaglistblog">
                                <li><Link id="filtertagoninstructionbutton1" to="/blog/tags">ИНСТРУКЦИЯ</Link></li>
                                <li><Link id="filtertagonhealthbutton1" to="/blog/tags">ЗДОРОВЬЕ</Link></li>
                                <li><Link id="filtertagonpsyhologybutton1" to="/blog/tags">ПСИХОЛОГИЯ</Link></li>
                            </ul>
                        </div>
                        <div id="filtertimespicblog">
                            <img src={timeclock} id="filtertime1pageblog" />
                        </div>
                        <h4 id="filtertimethirdpageblog1">
                            Время чтения: 22 минуты
                        </h4>
                        <h5 id="filterdatathirdpageblog1">
                            29 февраля 2024г.
                        </h5>
                    </div>

                    <div class="filtertextsblog2">
                        <div id="filtersquarethirdpage2" />
                        <div id="filterblogpics">
                            <Link to="/blog/zachem">
                                <img src={blogpic2} id="filterblogpic2" />
                            </Link>
                        </div>
                        <Link to="/blog/zachem" id="filterzagthirdblog2">
                            Методы и типы дневниковых практик
                        </Link>
                        <h3 id="filtertextthirdblog2">
                            Дневник — это систематизированные записи с отметками даты и времени, которые ведутся в целях саморефлексии, самопознания и отслеживания развития личности. В зависимости от индивидуальных задач и потребностей человека, существует множество типов дневников, каждый из которых ориентирован на определенные аспекты жизни и цели.
                        </h3>
                        <div id="filtertagsthirdpageblog">
                            <ul id="filtertaglistblog">
                                <li><Link id="filtertagoninstructionbutton2" to="/blog/tags">ИНСТРУКЦИЯ</Link></li>
                                <li><Link id="filtertagonselfdevelopmentbutton1" to="/blog/tags">САМОРАЗВИТИЕ</Link></li>
                                <li><Link id="filtertagoncreativebutton1" to="/blog/tags">ТВОРЧЕСТВО</Link></li>
                            </ul>
                        </div>
                        <div id="filtertimespicblog">
                            <img src={timeclock} id="filtertime2pageblog" />
                        </div>
                        <h4 id="filtertimethirdpageblog2">
                            Время чтения: 4 минуты
                        </h4>
                        <h5 id="filterdatathirdpageblog2">
                            15 января 2024г.
                        </h5>
                    </div>

                    <div class="filtertextsblog3">
                        <div id="filtersquarethirdpage3" />
                        <div id="filterblogpics">
                            <Link to="/blog/zachem">
                                <img src={blogpic3} id="filterblogpic3" />
                            </Link>
                        </div>
                        <Link to="/blog/zachem" id="filterzagthirdblog3">
                            Методы самоанализа и формирования личности
                        </Link>
                        <h3 id="filtertextthirdblog3">
                            Принято считать задачу наполовину решённой, когда поняты её условия. Подобным образом обстоит дело и с формированием личности, с построением себя. Стоит вам разобраться, с чем вы имеете дело на данный момент, и у вас появится возможность что-то с этим сделать.
                        </h3>
                        <div id="filtertagsthirdpageblog">
                            <ul id="filtertaglistblog">
                                <li><Link id="filtertagonpracticebutton1" to="/blog/tags">ПРАКТИКА</Link></li>
                                <li><Link id="filtertagonpsyhologybutton2" to="/blog/tags">ПСИХОЛОГИЯ</Link></li>
                                <li><Link id="filtertagoncreativebutton2" to="/blog/tags">ТВОРЧЕСТВО</Link></li>
                            </ul>
                        </div>
                        <div id="filtertimespicblog">
                            <img src={timeclock} id="filtertime3pageblog" />
                        </div>
                        <h4 id="filtertimethirdpageblog3">
                            Время чтения: 10 минут
                        </h4>
                        <h5 id="filterdatathirdpageblog3">
                            4 декабря 2023г.
                        </h5>
                    </div>

                    <Routes>
                        <Route path="/zachem" element={<Zachem/>} />
                    </Routes>
                </div>
            </>
        )
    }
}