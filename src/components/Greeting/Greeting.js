import notebook from '../../assets/images/notebook.png';
import React from 'react';
import style from './Greeting.module.css';

const Greeting = () => {
    return (<div className={style.greeting}>
        <h1 className={style.title}>Hello! This is the simplest todo-app:) You can add your tasks and group them. Good luck!!!</h1>
        <img src={notebook} alt='Greeting'/>
    </div>)
}

export default Greeting;