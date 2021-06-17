import React from 'react';
import style from './Skill.module.css';


export const Skill = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.icon}></div>
            <div className={style.title}>
                <span>Title</span>
            </div>
            <div className={style.description}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...
                </p>
            </div>
        </div>
    )
}