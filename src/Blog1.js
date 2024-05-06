import React, { Component } from 'react' 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './blog1.css'
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
                <div>
                    <div id="backgroundimages">
                        <div id="flowersleft">
                            <img src={leftflowers} id="leftflowersblog" />
                        </div>
                        <div id="flowersright">
                            <img src={rightflowers} id="rightflowersblog" />
                        </div>
                    </div>

                    <div id="maintextsblog">
                        <div id="linearzagblog">
                            <h1 id="zag1blog">
                                Вообще дневничок - полезная штука. Вроде фотографии души...
                            </h1>
                            <img src={pencil} id="pencilonthirdpage" />
                        </div>
                        <div id="textsblog">
                            <div id="squarethirdpage1">
                                <div id="rowblogmain">
                                    <div id="blogpics">
                                        <Link to="/blog/zachem">
                                            <img src={blogpic1} id="blogpic1" />
                                        </Link>
                                    </div>
                                    <div id="rows2inblog">
                                        <Link to="/blog/zachem" id="zagthirdblog1">
                                            Зачем люди ведут дневники и когда такая практика может помочь?
                                        </Link>
                                        <h3 id="textthirdblog1">
                                            Многим людям по всему миру в последнее время гораздо сложнее упорядочить свою жизнь и проанализировать то, что уже случилось. Это абсолютно нормально в ситуации крайней неопределенности и постоянного стресса, однако есть способы себе помочь — например, завести дневник.
                                        </h3>
                                        <div id="tagsthirdpageblog">
                                            <ul id="taglistblog">
                                                <li className="flowersblogpop"><Link id="tagoninstructionbutton1" to="/blog/tags">ИНСТРУКЦИЯ</Link></li>
                                                <li className="flowersblogpop"><Link id="tagonhealthbutton1" to="/blog/tags">ЗДОРОВЬЕ</Link></li>
                                                <li className="flowersblogpop"><Link id="tagonpsyhologybutton1" to="/blog/tags">ПСИХОЛОГИЯ</Link></li>
                                            </ul>
                                        </div>
                                        <div id="timedatarows">
                                            <div id="timespicblog">
                                                <img src={timeclock} id="time1pageblog" />
                                            </div>
                                            <h4 id="timethirdpageblog1">
                                                Время чтения: 22 минуты
                                            </h4>
                                        </div>
                                        <h5 id="datathirdpageblog1">
                                            29 февраля 2024г.
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="textsblog">
                            <div id="squarethirdpage1">
                                <div id="rowblogmain">
                                    <div id="blogpics">
                                        <Link to="/blog/zachem">
                                            <img src={blogpic2} id="blogpic1" />
                                        </Link>
                                    </div>
                                    <div id="rows2inblog">
                                        <Link to="/blog/zachem" id="zagthirdblog1">
                                            Методы и типы дневниковых практик
                                        </Link>
                                        <h3 id="textthirdblog1">
                                            Дневник — это систематизированные записи с отметками даты и времени, которые ведутся в целях саморефлексии, самопознания и отслеживания развития личности. В зависимости от индивидуальных задач и потребностей человека, существует множество типов дневников, каждый из которых ориентирован на определенные аспекты жизни и цели.
                                        </h3>
                                        <div id="tagsthirdpageblog">
                                            <ul id="taglistblog">
                                                <li className="flowersblogpop"><Link id="tagoninstructionbutton1" to="/blog/tags">ИНСТРУКЦИЯ</Link></li>
                                                <li className="flowersblogpop"><Link id="tagonselfdevelopmentbutton1" to="/blog/tags">САМОРАЗВИТИЕ</Link></li>
                                                <li className="flowersblogpop"><Link id="tagoncreativebutton1" to="/blog/tags">ТВОРЧЕСТВО</Link></li>
                                            </ul>
                                        </div>
                                        <div id="timedatarows">
                                            <div id="timespicblog">
                                                <img src={timeclock} id="time1pageblog" />
                                            </div>
                                            <h4 id="timethirdpageblog1">
                                                Время чтения: 4 минуты
                                            </h4>
                                        </div>
                                        <h5 id="datathirdpageblog1">
                                            15 января 2024г.
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="textsblog">
                            <div id="squarethirdpage1">
                                <div id="rowblogmain">
                                    <div id="blogpics">
                                        <Link to="/blog/zachem">
                                            <img src={blogpic3} id="blogpic1" />
                                        </Link>
                                    </div>
                                    <div id="rows2inblog">
                                        <Link to="/blog/zachem" id="zagthirdblog1">
                                            Методы самоанализа и формирования личности
                                        </Link>
                                        <h3 id="textthirdblog1">
                                            Принято считать задачу наполовину решённой, когда поняты её условия. Подобным образом обстоит дело и с формированием личности, с построением себя. Стоит вам разобраться, с чем вы имеете дело на данный момент, и у вас появится возможность что-то с этим сделать.
                                        </h3>
                                        <div id="tagsthirdpageblog">
                                            <ul id="taglistblog">
                                                <li className="flowersblogpop"><Link id="tagonpracticebutton1" to="/blog/tags">ПРАКТИКА</Link></li>
                                                <li className="flowersblogpop"><Link id="tagonpsyhologybutton1" to="/blog/tags">ПСИХОЛОГИЯ</Link></li>
                                                <li className="flowersblogpop"><Link id="tagoncreativebutton1" to="/blog/tags">ТВОРЧЕСТВО</Link></li>
                                            </ul>
                                        </div>
                                        <div id="timedatarows">
                                            <div id="timespicblog">
                                                <img src={timeclock} id="time1pageblog" />
                                            </div>
                                            <h4 id="timethirdpageblog1">
                                                Время чтения: 10 минут
                                            </h4>
                                        </div>
                                        <h5 id="datathirdpageblog1">
                                            4 декабря 2023г.
                                        </h5>
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