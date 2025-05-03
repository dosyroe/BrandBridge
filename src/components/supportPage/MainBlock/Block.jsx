import React from "react";
import { Link } from "react-router-dom";

import styles from "../../../pages/SupportPage.module.css"

const SuppBlock = () => {
    return (
        <div className={styles.Form}>
            <Link to="/" ><img src="/img/icons/left-arrow.png" alt="Back" /></Link>
            <h2>Поддержка</h2>
            <div>
                <p>Мы очень заботимся о сервисе и качестве</p>
                <p>Если у вас есть вопросы, идеи, пожелания, замечания -пишите! Мы сделаем все, чтобы стать лучше.</p>
            </div>
            <div className={styles.Input}>
                <input type="name" placeholder='Ваше имя'/>
                <input type="phone" placeholder='Номер телефона'/>
                <input type="email" placeholder='E-mail'/>
                <input type="text" placeholder='Город'/>
                <input type="text" placeholder='Цель обращения'/>
            </div>
        <button className={styles.btn}>Отправить</button>
        </div>
    );
};

export default SuppBlock;