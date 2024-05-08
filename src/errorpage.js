import { useRouteError } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import "./errorpage.css";
import backflo from "./pictures/oopsbackcenter.webp"
import Home from "./Home1";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="backerror">
      <img src={backflo} id="backgroundflower" />
      <div id="error-page">
        <h1 id="zagonerror">Ошибка 404</h1>
        <p id="errortextpage">Такой страницы мы ещё не придумали, но всё возможно в ближайшем будущем!</p>
        <p id="errortextpage">А пока предлагаем посетить главную страницу сайта:</p>
        <ul id="buttononerrorpage">
          <li><Link id="buttononerrorpagebutton" to="/">Главная</Link></li>
        </ul> 
      </div>
      </div>
  );
}