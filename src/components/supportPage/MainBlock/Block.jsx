import React from "react";
import { Link } from "react-router-dom";

const SuppBlock = () => {
    return (
        <div className="Form">
            <Link to="/" ><img src="/img/icons/left-arrow.png" alt="Back" /></Link>
            <h2>Поддержка</h2>
            <div>
                <p>Мы очень заботимся о сервисе и качестве</p>
                <p>Если у вас есть вопросы, идеи, пожелания, замечания -пишите! Мы сделаем все, чтобы стать лучше.</p>
            </div>
            <div className="Input">
                <input type="name" placeholder='Ваше имя'/>
                <input type="phone" placeholder='Номер телефона'/>
                <input type="email" placeholder='E-mail'/>
                <input type="text" placeholder='Город'/>
                <input type="text" placeholder='Цель обращения'/>
            </div>
        <button className="btn">Отправить</button>
        </div>
    );
};

export default SuppBlock;