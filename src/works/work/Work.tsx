import React from 'react';
import style from './Work.module.css';


export const Work = () => {
    return (
        <div className={style.wrapper}>
            {/*<div className={style.previewBlock}>*/}
                <div className={style.previewImg}>
                    {/*<img src="http://www.rosphoto.com/images/u/articles/1510/4_8.jpg" alt=""/>*/}
                    <a href="#" className={style.previewButton}>
                        Смотреть
                    </a>
                {/*</div>*/}
            </div>
            <div className={style.descripBlock}>
                <p className={style.title}>Название проекта</p>
                <p className={style.description}>Описание проекта</p>
            </div>

        </div>
    )
}