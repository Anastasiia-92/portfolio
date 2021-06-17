import React from 'react';
import style from './Works.module.css';
import styles from '../common/styles/commonStyles.module.css'
import {Work} from "./work/Work";


export const Works = () => {
    return (
        <div className={style.wrapper}>
            <div className={`${styles.container} ${style.worksContainer}`}>
                <div className={style.title}>
                    <h2>Мои работы</h2>
                </div>
                <div className={style.worksBlock}>
                    <Work />
                    <Work />
                </div>
            </div>
        </div>
    )
}