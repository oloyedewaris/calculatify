import React from 'react';
import style from '../App.module.css'

const Display= (props)=> {
    return (
        <div className={style.result}>
            <p className={style.resultP}>{props.result}</p>
        </div>
    );
}


export default Display;