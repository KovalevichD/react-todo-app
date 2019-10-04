import React, { useState } from 'react';
import style from './AddTask.module.css';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormControls/FormControls';

const AddTaskForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <button className={style.saveTaskButton}>Save</button>
        <Field component={Textarea} name='addTaskBody' validate={[required]} placeholder='Вescribe your task here...' className={style.textarea} />
    </form>
}

const AddTaskReduxForm = reduxForm({ form: 'addTask' })(AddTaskForm);

const AddTask = ({ groupId, setTask }) => {

    const [editMode, setEditMode] = useState(false);

    const onSubmit = (formData) => {
        setTask(formData.addTaskBody, groupId);
        deActivateEditMode()
    }

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
    }

    return (<div className={style.addTaskBlock}>
        {!editMode
            ? <input className={style.addTaksButton} onClick={activateEditMode} placeholder='Add task...' />
            : <>
                <AddTaskReduxForm onSubmit={onSubmit} />
                <button onClick={deActivateEditMode} className={style.backButton}>✚</button>
            </>
        }
    </div>)
}

export default AddTask;