import React from 'react';
import style from './Navigation.module.css';

export const Navigation = () => {
    return (
        <div className={style.menu}>
            <span>Главная</span>
            <span>Скилы</span>
            <span>Работы</span>
            <span>Контакты</span>
        </div>
    )
}