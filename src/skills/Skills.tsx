import React from 'react';
import style from './Skills.module.css';
import styles from '../common/styles/commonStyles.module.css'
import {Skill} from "./skill/Skill";


export const Skills = () => {
    return (
        <div className={style.wrapper}>
            <div className={`${styles.container} ${style.skillsContainer}`}>
                <div className={style.title}>
                    <h2>Мои скиллы</h2>
                </div>
                <div className={style.skillsBlock}>
                    <Skill />
                    <Skill />
                    <Skill />
                </div>
            </div>
        </div>
    )
}