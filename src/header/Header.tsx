import React from 'react';
import style from './Header.module.css';
import styles from '../common/styles/commonStyles.module.css'
import {Navigation} from "../nav/Navigation";

export const Header = () => {
    return (
            <div className={style.wrapper}>
                <div className={`${styles.container} ${style.headerContainer}`}>
                    <Navigation/>
                </div>
            </div>
    )
}