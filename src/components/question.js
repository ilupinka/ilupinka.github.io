import './question.css'
import leftflowers from "./pictures/leftflowerswhy.png"
import rightflowers from "./pictures/rightflowerswhy.png"
import Sidebar from "./sidebar"

function App() {
  return (
    <>
        <Sidebar />
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
            <h1 id="zag1">
                Почему тебе стоит вести дневник?
            </h1>
            <h2 id="textfirst1">
                Это безопасная зона для самовыражения. Здесь вы можете спокойно оставлять самые сокровенные мысли, которые засели в вашей голове, - и никто про них не узнает, никто не осудит.
            </h2>
            <h2 id="textfirst2">
                При ведении личного дневника вы начинаете осознавать свои действия, мысли и эмоции в тех или иных ситуациях. Вы можете посмотреть на себя со стороны и разобраться с причинами поведения, способами решения конфликтных ситуаций, что поможет откорректировать социальное положение.
            </h2>
            <h2 id="textfirst3">
                С течением времени память искажает прошедшие события. Чтобы сохранить впечатления о каких-либо событиях - опишите их в дневнике! Если вы в будущем наткнётесь на эту запись, то сможете вновь пережить волнительные эмоции прожитого когда-то дня.
            </h2>
        </div>
        <ul id="buttononfirstpage">
            <li><a id="buttononfirstpagebutton" href="">Зарегистрироваться</a></li>
        </ul>
    </>
  );
}

export default App;
