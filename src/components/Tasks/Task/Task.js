import React from 'react';
import style from './Task.module.css'

const Task = ({ body, deleteTask, taskId }) => {
    const onClick = () => {
        deleteTask(taskId)
    }
    return (<div className={style.tasks}>
        <p className={style.text}>{body}</p>
        <span className={style.closeButton} onClick={onClick}>✚</span>
    </div>)
}

export default Task;