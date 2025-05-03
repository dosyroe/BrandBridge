import React from "react";

import styles from "../../../pages/SupportPage.module.css"

const BlockSocial = () => {
    return (
        <div className={styles.Social}>
            <p>Следите за нами в социальных сетях</p>
            <p>Хотите быть в курсе новинок, промоакций и различных событий? Подписывайтесь на наши группы в социальных сетях!</p>
            <div className={styles.icons}>
            
            <a href="#facebook">
          <img src="/img/icons/telegram.png" alt="Telegram" />
        </a>
        <a href="#twitter">
          <img src="/img/icons/vk.png" alt="VK" />
        </a>
        <a href="#instagram">
          <img src="/img/icons/instagram.png" alt="Instagram" />
        </a>
            </div>
        </div>
    );
};

export default BlockSocial;