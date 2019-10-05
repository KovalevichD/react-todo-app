import React, { useState } from 'react';
import style from './Task.module.css'

const Task = ({ taskBody, taskId, groupId, deleteTask, editTask }) => {
    const [editMode, setEditMode] = useState(false);
    const [taskText, setTaskText] = useState(taskBody);

    const onClickDeleteTask = () => {
        deleteTask(taskId)
    }

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = (e) => {
        const taskText = e.target.value;

        editTask(taskText, groupId, taskId)
        setEditMode(false)
    }

    const onChangeEditTask = (e) => {
        setTaskText(e.target.value)
    } 

    return (<div className={style.tasks}>
        {!editMode
            ? <><p className={style.text}>{taskBody}</p>
                <span className={style.editButton} onClick={activateEditMode}>edit</span>
                <span className={style.closeButton} onClick={onClickDeleteTask}>✚</span>
            </>
            : <textarea value={taskText} onBlur={deActivateEditMode} autoFocus={true} className={style.editTextarea} onChange={onChangeEditTask}/>}

    </div>)
}

export default Task;