import React from 'react';
import style from './Contact.module.css';
import styles from '../common/styles/commonStyles.module.css'


export const Contact = () => {
    return (
        <div className={style.wrapper}>
            <div className={`${styles.container} ${style.contactContainer}`}>
                <div className={style.title}>
                    <h2>Контакты</h2>
                </div>
                <div className={style.formContact}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea></textarea>
                </div>
                <button className={style.sendContactBtn}>
                    Отправить
                </button>
            </div>
        </div>
    )
}