import React, { Component } from 'react' 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './zachem.css'
import samovyr from "./pictures/samovyr.webp"
import samsam from "./pictures/samsam.webp"
import samopoz from "./pictures/samopoz.webp"
import picforcit1 from "./pictures/flowersforstate1.webp"
import picforcit2 from "./pictures/flowersforstate2.webp"
import blogpic1 from './pictures/backimageblogzachem.webp'
import timeclock from './pictures/time.webp'
export default class Home extends Component {
    render() {
        return (
            <>
                <div>
                    <div id="upblogstate" className="inlineforblogstate">
                        <h1 id="datainfo1" className="inlineforblogstate">
                            29 февраля 2024г.
                        </h1>
                        <ul id="tagslistondopinfo1" className="inlineforblogstate">
                            <li><Link id="tagoninstructionbuttoninfo1" to="/blog/instruction">ИНСТРУКЦИЯ</Link></li>
                            <li><Link id="tagonhealthbuttoninfo1" to="/blog/health">ЗДОРОВЬЕ</Link></li>
                            <li><Link id="tagonpsyhologybuttoninfo1" to="/blog/psyhology">ПСИХОЛОГИЯ</Link></li>
                        </ul>
                        <div id="clockwithtime">
                            <img src={timeclock} id="clockoninfodop1" className="inlineforblogstate"/>
                            <h1 id="readingtimeinfo1" className="inlineforblogstate">
                                Время чтения: 22 минуты
                            </h1>
                        </div>
                    </div>
                    <div id="maininformationonblog">
                        <h1 id="zagolinfo1">
                            Зачем люди ведут дневники и когда такая практика может помочь?
                        </h1>
                    </div>
                    <img src={blogpic1} id="fullblogpic1" />
                    <div id="textstateonblog">
                        <h1 id="firstab1">
                            Многим людям по всему миру в последнее время гораздо сложнее упорядочить свою жизнь и проанализировать то, что уже случилось. Это абсолютно нормально в ситуации крайней неопределенности и постоянного стресса, однако есть способы себе помочь — например, завести дневник. Для чего еще люди это делают, какой выбрать формат, с чего начать и нужно ли продолжать вести дневник, если расхотелось? Отвечаем на эти вопросы в нашей инструкции.
                        </h1>
                        <h1 id="littlezag1info">
                            Подумайте, нужен ли вам дневник. И если да, то зачем
                        </h1>
                        <h1 id="firstab1">
                            Дневник — один из видов письменных практик, знакомых людям с изобретения письменности. Дневник используют при психических расстройствах: тревожном расстройстве, депрессии и посттравматическом стрессовом расстройстве (ПТСР) — впрочем, надежных доказательств эффективности пока нет. Кроме того, ведение дневника может быть полезно для того, чтобы приспособиться к серьезным изменениям в жизни или справиться с повседневным стрессом.
                            <div id="zachemspace" />
                            <p>Психолог Валерия Федоряк рассказывает, как именно дневник может помочь:</p>
                            <div id="zachemspace" />
                            <div id="secondab1dop">
                                <ul id="borderblockstate"  className="flowersblogzachem">
                                    <p>Прожить сильные эмоции. Записывание сильных эмоций помогает прожить их и снизить уровень напряжения. Это работает за счет того, что темп нашей письменной речи ниже, чем внутренней и устной. Особенно полезно, если мы пишем от руки — так мы действительно замедляемся, к тому же нам нужно время на формулирование мыслей. У психики есть такой эффект: когда мы называем свое переживание — это сразу снижает его заряд.</p>
                                    <div id="zachemspace" />
                                    <li><p>Справиться с кризисом. Дневник — это способ самопознания и рефлексии. Он может отлично помогать, когда мы узнаем о значительных изменениях в жизни, например диагнозе, или каких-то событиях, которые меняют наше представление о себе.</p></li>
                                    <div id="zachemspace" />
                                    <li><p>Улучшить отношения с другими людьми. Если мы хотим работать над чем-то конкретным в отношениях, то можем записывать и наблюдать, что происходит.</p></li>
                                    <div id="zachemspace" />
                                    <li><p>Помочь в работе с проблемами, например с паническими атаками, — человек может отслеживать появление триггеров и накопление напряжения. Благодаря дневнику и его последующему чтению мы можем обнаружить повторяющиеся паттерны в своем поведении и изменить их. Конечно, лучше это делать при помощи психотерапевта.</p></li>
                                </ul>
                            </div>
                        </h1>
                        <h1 id="littlezag1info">
                            Как именно дневник может помочь справиться с тревогой?
                        </h1>
                        <h1 id="firstab1">
                            <p>Люди с тревожными расстройствами нередко сталкиваются с чрезмерным беспокойством и навязчивыми мыслями, чаще всего негативными. Это называется руминацией. Дневник может помочь справиться с докучливыми мыслями за счет того, что человек «вываливает» их наружу, облекает в слова, а затем откладывает в сторону, не позволяя дальше мучить себя, объясняет Валерия Федоряк. Дневник также помогает найти альтернативы тревожным мыслям.</p>
                            <div id="zachemspace" />
                            <p>Федоряк говорит, что не существует правильного способа ведения дневника. Это может быть как свободный формат, так и формализованный. Можно записывать все свои переживания и события или наблюдать за конкретным чувством, например чувством благодарности или раздражения. Можно вести дневник в виде таблицы — дата, событие, эмоции, кто был вовлечен, объясняет специалист:</p>
                            <div id="zachemspace" />
                            <div id="backgroundonblogcitata">
                                <img src={picforcit1} id="picforblogcit1" />
                                <h1 id="topcavsonblogstate">"</h1>
                                <div id="firstab1citata">
                                    <p>Я могу давать клиентам конкретное задание, например записывать в конце или начале дня три самых ярких, приятных и неприятных впечатления за день независимо от их значимости. Таким образом, человек улучшает рефлексию и уделяет внимание своему внутреннему миру. Еще классно работает дневник благодарности, его можно фокусировать на благодарности людям, миру или себе.</p>
                                </div>
                                <h1 id="bottomcavsonblogstate">"</h1>
                                <img src={picforcit2} id="picforblogcit2" />
                            </div>
                            <div id="zachemspace" />
                            <p>По словам психолога, дневник помогает улучшать качество жизни, позволяет чувствовать себя стабильнее и предотвращать ментальные проблемы или как минимум их ухудшение. В процессе написания и осмысления мы возвращаем то, что называется агентностью, то есть ощущаем себя не жертвами обстоятельств, а людьми, способными так или иначе влиять на свою жизнь и выбирать, как мы будем действовать дальше или как будем относиться к случившимся событиям.</p>
                        </h1>
                        <img src={samopoz} id="samopozimg" />
                        <h1 id="littlezag1info">
                            А что известно об эффективности ведения дневника при ПТСР?
                        </h1>
                        <h1 id="firstab1">
                            <p>Людям с ПТСР дневник может пригодиться для того, чтобы описать травмирующее событие, используя подсказки психотерапевта, а затем обсудить вместе с ним написанное, в том числе мысли и эмоции, связанные с пережитым опытом. Лучше вести дневник именно под руководством психотерапевта, поскольку в некоторых случаях подробное описание травмирующего события может стать триггером обострения.</p>
                            <div id="zachemspace" />
                            <p>Клинический психолог, когнитивно-поведенческий терапевт А. (спикер попросил об анонимности) не считает дневники панацеей — она сравнивает их с приемом мультивитаминов:</p>
                            <div id="zachemspace" />
                            <div id="backgroundonblogcitata">
                                <img src={picforcit1} id="picforblogcit1" />
                                <h1 id="topcavsonblogstate">"</h1>
                                <div id="firstab1citata">
                                    <p>Есть общее ощущение полезности, большое количество положительных отзывов и рекомендаций, логичная идея восполнения дефицитов [полезных веществ] и профилактики заболеваний. Однако на деле все не так однозначно.</p>
                                </div>
                                <h1 id="bottomcavsonblogstate">"</h1>
                                <img src={picforcit2} id="picforblogcit2" />
                            </div>
                            <div id="zachemspace" />
                            <p>Самое масштабное из проведенных метаисследований по ведению дневников не подтверждает их универсальную эффективность. Положительное воздействие на ментальное здоровье, которое отмечается в некоторых работах, не может быть доказано из-за многочисленных методологических недостатков, несущественного влияния на участников и высокой гетерогенности данных (термин для обозначения различий между исследованиями). При этом в случае с мультивитаминами все более однозначно — если эффективность дневников не доказана, то неэффективность мультивитаминов для «профилактического» приема исследователи считают установленным фактом.</p>
                        </h1>
                        <h1 id="littlezag1info">
                            Не заставляйте себя вести дневник — особенно если от этого вы чувствуете себя хуже
                        </h1>
                        <h1 id="firstab1">
                            <p>В теории бессистемное ведение дневников может даже усилить негативный процесс психологического слияния с проблемой, считает клинический психолог. Если человек снова и снова в разной форме воспроизводит мысли и убеждения, которые изначально привели к психологическим трудностям, их воздействие может только усилиться и еще глубже закрепить негативные шаблоны мышления, говорит специалистка.</p>
                            <div id="zachemspace" />
                            <p>Если продолжить аналогию с витаминами, использование дневников полностью оправданно, если удалось диагностировать конкретный дефицит, который необходимо восполнить. Например, когда человек воспринимает себя и окружающих исключительно в негативном ключе (что часто лежит в основе депрессии), психотерапевт может порекомендовать ведение дневника благодарности. Это помогает снизить интенсивность ментального фильтра, при котором все внимание сосредоточено на недостатках и негативных сторонах жизни, а позитивные моменты игнорируются или обесцениваются.</p>
                            <div id="zachemspace" />
                            <p>В своей практике А. «назначает» дневники — ведь когнитивно-поведенческая терапия предполагает постоянную работу с автоматическими мыслями, которые вызывают негативные эмоции:</p>
                            <div id="zachemspace" />
                            <div id="backgroundonblogcitata">
                                <img src={picforcit1} id="picforblogcit1" />
                                <h1 id="topcavsonblogstate">"</h1>
                                <div id="firstab1citata">
                                    <p>Их очень важно замечать и фиксировать, я советую завести дневник мыслей клиентам уже на первой встрече. Просто записать мысли, к сожалению, недостаточно, поэтому я также обучаю клиентов двум стратегиям последующей работы. Первая заключается в том, чтобы проверить негативную мысль и по возможности найти доказательства того, что она неверна. Вторая стратегия сосредоточена на том, чтобы уменьшить влияние мысли на поведение вне зависимости от того, верна она или нет. Такой процесс отстранения от собственных мыслей помогает гибко реагировать на любые ситуации и строить полную, глубокую жизнь в соответствии с выбранными ценностями. Уже после нескольких сессий клиент осваивает эти стратегии, начинает самостоятельно масштабировать их на все сферы и становится своим собственным терапевтом.</p>
                                </div>
                                <h1 id="bottomcavsonblogstate">"</h1>
                                <img src={picforcit2} id="picforblogcit2" />
                            </div>
                            <div id="zachemspace" />
                            <p>«Когда дневник используют как терапевтическую практику, важно избегать принуждения и насилия, тем более что у многих из нас есть негативный опыт, связанный с обучением и сочинениями, а также страх белого листа, — предупреждает психолог Валерия Федоряк — Здесь важно не ставить себе жестких задач и уж тем более не наказывать себя, если по каким-то причинам у вас не получается их достигнуть. Наоборот, часто имеет смысл давать себе ограничения, что вы, например, пишете не больше двух страниц в день или не дольше 20 минут в день. Это может помочь лучше структурировать свои переживания и выделять важное».</p>
                            <div id="zachemspace" />
                            <p>Если желание вести дневник пропало — в этом нет ничего страшного. Возможно, вы хотели успокоиться с помощью дневника, а теперь начался новый период жизни и вы не испытываете такой потребности. Возможно, были другие цели, но они поменялись. Можно взять паузу, а потом попробовать вернуться к дневнику.</p>
                            <div id="zachemspace" />
                            <p>Клинический психолог А. считает, что, если желание вести дневник пропало, стоит напомнить себе, почему важно продолжать:</p>
                            <div id="zachemspace" />
                            <div id="backgroundonblogcitata">
                                <img src={picforcit1} id="picforblogcit1" />
                                <h1 id="topcavsonblogstate">"</h1>
                                <div id="firstab1citata">
                                    <p>После того как вы усилите свою мотивацию, можно поработать с технической стороной этого действия и постараться закрепить его в распорядке дня. Выделите для ведения дневника немного времени в конкретные дни, поставьте напоминание, совместите с чем-нибудь приятным, исключите вероятность действий, которые отвлекают или способствуют прокрастинации. Также очень полезно рассказать о своем намерении друзьям и близким. В английском языке такой способ называют accountability partnership (буквально — подотчетное или ответственное партнерство), существуют даже отдельные приложения, в которых можно найти партнера по ответственности и дать ему слово выполнять задачу. В психотерапии эту роль берет на себя психолог: он анализирует динамику, предлагает индивидуальные техники, помогает исключить самокритику и стать лучшим другом самому себе в любых начинаниях.</p>
                                </div>
                                <h1 id="bottomcavsonblogstate">"</h1>
                                <img src={picforcit2} id="picforblogcit2" />
                            </div>
                            <div id="zachemspace" />
                            <p>По мнению Федоряк, ведение дневника точно не будет пустой тратой времени — благодаря такой привычке мы как минимум можем возвращаться к предыдущему опыту. Наша память устроена так, что мы не можем считать свои воспоминания объективным способом хранения информации. У нас могут быть ложные воспоминания, а настоящие могут стереться или исказиться. Дневник позволяет вернуться к какому-то опыту жизни, не искаженному временем и эмоциями. Так можно отследить свои проблемы или особенности, которые трудно поймать в моменте.</p>
                            <div id="zachemspace" />
                            <p>Для тех, кто хочет глубже познакомиться с темой, Федоряк рекомендует книгу «Дневник как путь к себе» Кэтлин Адамс и сайт «Письменные практики» Дарьи Кутузовой. Когнитивному терапевту А. нравятся книги Расса Хэрриса о подходе терапии принятия и ответственности, например «Ловушка счастья». Также она рекомендует книги о классическом когнитивно-поведенческом подходе, например «Терапию настроения» Дэвида Бернса.</p>
                        </h1>
                        <img src={samsam} id="samsamonblog" />
                        <h1 id="littlezag1info">
                            Попытайтесь зафиксировать исторические события
                        </h1>
                        <h1 id="firstab1">
                            <p>Помимо терапевтического эффекта, люди могут вести дневники по самым разным причинам: для одних это способ развить писательский навык, для других — услышать слова поддержки, для третьих — зафиксировать момент.</p>
                            <div id="zachemspace" />
                            <p>Катерина Кильтау, соосновательница проекта Emigration for action, экс-координатор движения «Голос» в Алтайском крае, начала вести дневник недавно, она использует его для фиксации эпохи:</p>
                            <div id="zachemspace" />
                            <div id="backgroundonblogcitata">
                                <img src={picforcit1} id="picforblogcit1" />
                                <h1 id="topcavsonblogstate">"</h1>
                                <div id="firstab1citata">
                                    <p>Я начала вести дневник чуть больше месяца назад. Сложно сказать, насколько укорененной в жизнь эта практика получится, но хотелось бы. Честно, ежедневно писать не выходит, ведь дневник — такая же привычка, как чашка кофе или пробежка по утрам. Чтобы это стало неотъемлемой частью графика, нужно время.</p>
                                    <div id="zachemspace" />
                                    <p>Я пишу на компьютере, и это сугубо практический выбор. Я много перемещаюсь, и [мне] сложно брать с собой отдельную тетрадь, которую к тому же можно случайно где-то потерять. Ну и печатать быстрее. Меня часто заносит, и изначально задуманные несколько букв могут превратиться в километры текста. Хотя соприкосновение с бумагой я, конечно, воспринимаю как что-то более личное.</p>
                                    <div id="zachemspace" />
                                    <p>С начала войны у меня были практически ежедневные мысли начать писать мемуары, но не выходило. Казалось, что момент зафиксировать мрак, распространяющийся со скоростью света, упущен. Мне помог разговор с другом. Это просто вдохновение, которое произошло в нужное время в нужном месте. Весьма органично, кажется, так и должно быть.</p>
                                    <div id="zachemspace" />
                                    <p>Дневник помогает мне четко сформулировать то, что является просто брожением в голове. И когда это получается — пропадает маскирующаяся легкость и возникает реальность. В том числе мне важно зафиксировать свою будничность, из которой получается слепок истории. Например, только в этом октябре мне пришло в голову прочитать книгу Виктора Пелевина прошлого года, и я писала в дневнике острые цитаты оттуда. Почему? Может, потому что из года в год читать его было стабильной практикой, но в 2022-м этого не случилось из-за войны, мобилизации и отсутствия внутренних ресурсов. Сейчас все перечисленное продолжается, но неопределенность жизни в эмиграции с ее постоянными переездами, конструированием нового окружения и быта, переживанием ужасных новостей о войне и соприкосновение с украинскими беженцами стали рутиной. И от этого страшно. И из этого в том числе и складывается картина.</p>
                                    <div id="zachemspace" />
                                    <p>Любой человек, если он не лукавит, допускает вероятность, что его дневник может быть прочитан. У меня нет цели писать для историков, но если мои записи им пригодятся для расшифровки прошлого — я буду рада.</p>
                                </div>
                                <h1 id="bottomcavsonblogstate">"</h1>
                                <img src={picforcit2} id="picforblogcit2" />
                            </div>
                        </h1>
                        <h1 id="littlezag1info">
                            Помогите себе прожить важный личный опыт
                        </h1>
                        <h1 id="firstab1">
                            <p>Алена Закутаева, автор телеграм-канала о родительстве «Ты справляешься», начала вести канал о родительстве с появлением первой дочери. Ей было важно запечатлеть моменты жизни в новом статусе, чтобы запомнить свои чувства, сомнения и страхи и спустя годы не забыть, как было сложно и противоречиво. Она пишет:</p>
                            <div id="zachemspace" />
                            <ul id="borderblockstate">
                                <p>1️. Мне важно зафиксировать свои мысли и эмоции. Я никогда больше не буду матерью-первопроходцем, и этот путь однозначно достоин документирования — как минимум для меня и моей дочери.</p>
                                <div id="zachemspace" />
                                <li><p>2️. Мне нравится получать обратную связь. Не буду лукавить: реакции и комментарии, а также сообщения в личку и обсуждения при встрече — отличное топливо для творческой энергии. Я очень радуюсь каждому просмотру, реакции, подписчику и всегда с удовольствием отвечаю на комменты или хотя бы оставляю реакцию, если добавить нечего.</p></li>
                                <div id="zachemspace" />
                                <li><p>3️. Я считаю важным делиться опытом обыкновенного родительства. Я не совмещаю материнство и работу, так и не придумала себе бизнес и не особенно «развиваюсь» в декрете. Вообще-то мне и с одним ребенком, одним мужем и двумя котами хватает забот и причин для усталости и раздражения. И это нормально, хотя идеальное материнство из рекламы и соцсетей выглядит иначе!</p></li>
                                <div id="zachemspace" />
                                <li><p>4️. Мне нравится быть полезной. Порой какие-то штуки, которые одним из нас кажутся обыденными, для других становятся открытием и экономят время и нервы. Я так для себя открыла хипсити колготки с подтяжками, например. Так что и мои посты, и ваши комментарии — источник ценной информации, хоть наши внутренние критики порой нашептывают другое.</p></li>
                                <div id="zachemspace" />
                                <li><p>5️. Я считаю важным озвучивать вещи, о которых не принято говорить открыто и откровенно. Серия постов про роды получила неожиданный отклик. Мы выяснили, что будущие мамы часто не подозревают, что их ждет в роддоме, потому что ни гинекологи, ни наши мамы, ни рожавшие подруги обычно не делятся деталями. Оно и понятно: подробности не очень-то приятные и затуманиваются радостью от встречи с малышом. Но мне кажется, чем лучше женщина готова к возможным неприятностям и разочарованиям, тем лучше она сможет за себя постоять.</p></li>
                            </ul>
                            <div id="zachemspace" />
                            <p>У российского экс-журналиста Сергея Маркелова, который сейчас работает в США курьером компании Amazon, другой опыт: он вел записи, чтобы разбавить монотонность рабочих дней. Но в итоге дневник он удалил и не пожалел о своем выборе:</p>
                            <div id="zachemspace" />
                            <div id="backgroundonblogcitata">
                                <img src={picforcit1} id="picforblogcit1" />
                                <h1 id="topcavsonblogstate">"</h1>
                                <div id="firstab1citata">
                                    <p>Я не тот человек, который склонен вести дневники. Лет с 11 у меня было несколько попыток начать вести дневник. Я садился, писал страницу-две, но через несколько дней мне это надоедало. Так было раз 5–7. В соцсетях я и раньше постил какие-то вещи из жизни: сначала они были связаны с семьей и путешествиями, а потом с рабочими буднями.</p>
                                    <div id="zachemspace" />
                                    <p>На дневник мой профиль в фейсбуке стал похож, когда я переехал в Америку и устроился работать доставщиком. Работа монотонная: целый день сидишь за рулем, совершая одни и те же механические действия. Мне было скучно без умственного труда, и я принялся регулярно писать мысли о работе и людях. В какой-то момент, когда я в очередной раз думал удалить свой профиль, фейсбук прислал мне предложение писать посты за деньги. Каждый день я должен был публиковать пост и отвечать на комментарий. Так я заработал за месяц пять долларов… Возможность подработки отпала — и я все же удалил профиль, но архив сохранил — вдруг моим детям взбредет в голову идея посмотреть это все.</p>
                                    <div id="zachemspace" />
                                    <p>Мне не жалко. Много лет назад, когда только появилась сеть «ВКонтакте», меня туда затянула знакомая. Начиная с 2016 года соцсети стали основной частью моей работы. Они отнимали уйму времени и превратились почти в зависимость. Когда я ушел из журналистики, я понял, что мне в соцсетях делать нечего. Я удалил фейсбук, инстаграм, потерял пароль от «ВКонтакте». Мне нравится сама идея, что у меня не будет соцсетей. У меня освободилось пространство для мыслей, из которых я могу делать что-то более стоящее, чем посты в соцсетях. Лайки, комментарии, которые я получал, не имели для меня значения. Единственное, что мне кажется интересным в ведении дневников, — это идея фиксации событий как в романе Марии Степановой «Памяти памяти», ведь многие события из прошлого мы помним не так, как они на самом деле происходили.</p>
                                </div>
                                <h1 id="bottomcavsonblogstate">"</h1>
                                <img src={picforcit2} id="picforblogcit2" />
                            </div>
                        </h1>
                        <h1 id="littlezag1info">
                            Воспоминания действительно могут меняться. Как именно?
                        </h1>
                        <h1 id="firstab1">
                            <p>Каждый раз, когда мы возвращаем старое воспоминание, мы рискуем его изменить. Это похоже на открытие документа на компьютере: старая информация переходит в уязвимое состояние, когда ее можно редактировать, перезаписывать или даже удалять. Воспоминания пишутся не один раз, а каждый раз, когда мы их вспоминаем.</p>
                            <div id="zachemspace" />
                            <p>Чтобы память снова укрепилась, требуется некоторое время для процесса, называемого реконсолидацией, — его можно описать как перезаписывание памяти, которое запускается при повторном обращении к ранее сформированному памятному следу.</p>
                            <div id="zachemspace" />
                            <p>Нейробиолог Стив Рамирес из нарвардского университета согласен с тем, что воспоминания можно изменить. «Обычно мы думаем о памяти как о видеозаписи прошлого, но на самом деле она очень реконструктивна по своей природе», — говорит он.</p>
                        </h1>
                        <h1 id="littlezag1info">
                            Рассмотрите дневник как способ профессионального самовыражения
                        </h1>
                        <h1 id="firstab1">
                            <p>Иногда дневники превращаются из хобби в важный профессиональный проект. Так было с дневником педиатра Сергея Бутрия «Заметки детского врача». Сначала он писал и модерировал на форуме доказательной медицины РМС, а потом завел личные каналы, которые быстро набрали популярность: сейчас в телеграм-канале «Заметки детского врача» более 100 тысяч подписчиков, а в одноименном паблике «ВКонтакте» — более 200 тысяч.</p>
                            <div id="zachemspace" />
                            <p>«Главное удобство блога для меня — возможность потом кидать адресные ссылки на свои посты очным пациентам. Времени на приеме вечно не хватает, а смартфоны и имейлы есть сейчас у всех. И я часто на приеме спрашиваю у пациента почту и кидаю прямые ссылки на свои посты по интересующим проблемам, которые мы не успели до конца обсудить в кабинете», — писал он в 2017 году, когда только начал вести телеграм-канал. При этом Бутрий делится не только профессиональным контентом, но и рассказывает личные истории в блоге — например, о том, как завел собаку. Также педиатр рефлексирует на темы, связанные с этической составляющей его работы: например, в этом посте он рассуждает о том, что привычка пугать пациента — это «самый простой и надежный признак плохого врача».</p>
                            <div id="zachemspace" />
                            <p>Его блог по-прежнему остается некоммерческим проектом. «Единственной целью является посильное медицинское просвещение пациентов и коллег, — говорит Бутрий. — Я не размещаю рекламу в блоге, чистота стены и репутация для меня намного дороже денег. Не продвигаю чужие блоги и не особо стремлюсь к продвижению своего (и уж точно не готов платить за это). Блог для меня — это хобби, а хобби — это только то, от чего испытываешь удовольствие. Когда блог перестанет быть мне интересен — он умрет».</p>
                            <div id="zachemspace" />
                            <p>Бутрий считает растущую личную известность побочным эффектом блога, во многом неприятным для него. Он пишет, что с удовольствием вел бы блог безымянного педиатра и оставался бы в тени, но «фарш назад не перекрутишь».</p>
                        </h1>
                        <img src={samovyr} id="samovyrblog" />
                        <h1 id="littlezag1info">
                            Попробуйте оставить след, если для вас это важно
                        </h1>
                        <h1 id="firstab1">
                            <p>Анатолий Ульянов, украинский писатель и документалист, ведет свой блог DADAKINDER уже много лет. Он фиксирует реальность разными способами: фотографирует, снимает документальные фильмы, пишет. Ему важно «делать засечки на коре головного мозга».</p>
                            <div id="zachemspace" />
                            <p>Вот что он пишет в своем телеграм-канале:</p>
                            <div id="zachemspace" />
                            <div id="backgroundonblogcitata">
                                <img src={picforcit1} id="picforblogcit1" />
                                <h1 id="topcavsonblogstate">"</h1>
                                <div id="firstab1citata">
                                    <p>Я зачарован памятью, и большинство своих работ реализую именно в этом жанре. Ведь что такое дневник? Это память. Фотография — память. Документальный фильм — память.</p>
                                    <div id="zachemspace" />
                                    <p>Многие путают память и прошлое; чувство ностальгии и желание вернуться во вчерашний день. Все это разные вещи. Когда я обращаюсь к воспоминаниям детства, это не означает, что я хочу снова стать ребенком. Наличие во мне теплых образов, связанных с определенными моментами жизни, позволяет мне их смаковать, время от времени скучая по отдельным эпизодам. Однако я не жду их повторения и не хочу «родиться обратно» — сбежать в прошлое, которое и без того всегда со мной.</p>
                                    <div id="zachemspace" />
                                    <p>Что же я делаю, когда вспоминаю? Я обращаюсь в библиотеку своего опыта, извлекаю из нее ту или иную кассету и запускаю ощущения, связанные с записью; переживаю воспоминание здесь и сейчас, собою нынешним — необратимо изменившимся с момента записи. Меняется от этого и сама запись. Ее поэтому не назовешь отсылкой к трупу.</p>
                                </div>
                                <h1 id="bottomcavsonblogstate">"</h1>
                                <img src={picforcit2} id="picforblogcit2" />
                            </div>
                        </h1>
                        <h1 id="littlezag1info">
                            И еще немного красивых размышлений Ульянова о природе памяти и пользе дневника 
                        </h1>
                        <h1 id="firstab1">
                            <div id="backgroundonblogcitata">
                                <img src={picforcit1} id="picforblogcit1" />
                                <h1 id="topcavsonblogstate">"</h1>
                                <div id="firstab1citata">
                                    <p>Воспоминание — это отзвук, который не твердеет, напротив — остается рыхлым, цветет и имеет весьма отдаленное отношение к прошлому и его правде. Память превращает прошлое в стих — нечто, чего, быть может, и не было, а если было, то не совсем так, как ты это запомнил.</p>
                                    <div id="zachemspace" />
                                    <p>Что же тогда является предметом ностальгии? Прошлое, чью правду ты не помнишь, или настоящее, в котором ты скучаешь о том, что сочинил на ходу?</p>
                                    <div id="zachemspace" />
                                    <p>Нет, память — это не вранье. Но и не архив документов. Скорее призрачное зазеркалье; процесс и практика, без которых невозможно ни сознание, ни мышление. Ведь и настоящее мы воспринимаем с неосязаемой задержкой, связанной с необходимостью приема поступающих сигналов органами чувств, их интерпретацией и дальнейшим осмыслением. Значит, единственная реальность, которая доступна нам в ощущениях, — это прошлое, его отражения, эхо; записи на бобинах мозга.</p>
                                    <div id="zachemspace" />
                                    <p>Так вот мне нравится записывать бобины. Не только в смысле творчества, но и по жизни. Вот я иду по улице, встречаю человека, разглядываю куст, и ко всему этому отношусь изначально как к памяти — превращаю в воспоминание. Задача — прожить его сейчас так, чтобы оно вызывало желание обращаться к себе потом.</p>
                                    <div id="zachemspace" />
                                    <p>Подчас запоминание буквально: я записываю звуки города и свои разговоры с незнакомцами, делаю фото в бугенвиллеях, снимаю движения тел в полумраке, и ничего из этого не продиктовано желанием сказать миру нечто большее, чем говорит нож, которым мы вырезаем на беседке крик в вечность: «Тут был Вася». Вот и я тут был.</p>
                                    <div id="zachemspace" />
                                    <p>Данное отношение задает настрой — обостренное, сентиментальное восприятие жизни. Утопая в лице, я включаю тоску, как если вот-вот все погаснет: не станет солнца, света, девушки, лица, как и меня вот-вот не станет. Тут-то все и вспыхивает. Ты очарован. Но главное — жив. Украл у смерти лошадь удовольствия. Пил, пока мог.</p>
                                    <div id="zachemspace" />
                                    <p>Политически такое отношение небезупречно, так как со временем правда прошлого подменяется радужным конспектом. Негативы становятся плюшевыми. Блекнут на фоне мгновений, собранных в лукошко черепа и принадлежащих местам и событиям, в которых ты есть, существуешь и жив. То есть когда все по большому счету хорошо.</p>
                                    <div id="zachemspace" />
                                    <p>Быть живым лучше, чем мертвым. А умирать не хочется. Но ты умрешь. И знаешь, что умрешь. Поэтому дышишь жадно. Светишь ярко. И живешь, делая из всего засечки на коре головного мозга.</p>
                                    <div id="zachemspace" />
                                    <p>Самое трогательное в этом то, что нам недостаточно просто запоминать жизнь. Мы делимся ее открытками друг с другом. Делимся жизнью. Проживаем ее вместе, прежде чем превратиться в посевы, деревья и гладиолусы.</p>
                                </div>
                                <h1 id="bottomcavsonblogstate">"</h1>
                                <img src={picforcit2} id="picforblogcit2" />
                            </div>
                        </h1>
                    </div>
                </div>
            </>
        )
    }
}