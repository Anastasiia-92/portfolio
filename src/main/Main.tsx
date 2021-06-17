import React from 'react';
import style from './Main.module.css';
import styles from '../common/styles/commonStyles.module.css'


export const Main = () => {
    return (
        <div className={style.wrapper}>
            <div className={`${styles.container} ${style.mainContainer}`}>
                <div className={style.title}>
                    <span>Hi there!</span>
                    <h1>My name is Nastja.</h1>
                    <p>I`m front-end developer</p>
                </div>
                <div className={style.photo}>
                </div>
            </div>
        </div>
    )
}