import React from 'react';
import style from './Footer.module.css';
import styles from '../common/styles/commonStyles.module.css'


export const Footer = () => {
    return (
        <div className={style.wrapper}>
            <div className={`${styles.container} ${style.footerContainer}`}>
                <div className={style.title}>
                    <h2>Настенька Гусаренко</h2>
                </div>
                <div className={style.icons}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <div className={style.title}>
                    <h2>© 2021 Все права защищены</h2>
                </div>
            </div>
        </div>
    )
}