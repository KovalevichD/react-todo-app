import React, { useState } from 'react';
import style from './AddGroup.module.css';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators/validators';
import { Input } from '../common/FormControls/FormControls';
import { getGroups } from '../../Redux/groups-reducer';

const maxLength10 = maxLengthCreator(10);

const AddGroupForm = (props) => {
    return <form onSubmit={props.handleSubmit}>

        <button className={style.addGroupBtn}>Add</button>
        <Field component={Input} name='addGroupBody' validate={[required, maxLength10]} placeholder='Add group...' className={style.input} autoFocus={true} />
    </form>
}

const AddPostReduxForm = reduxForm({ form: 'addGroup' })(AddGroupForm);

const AddGroup = (props) => {

    const [editMode, setEditMode] = useState(false);

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
    }

    const onSubmit = (formData) => {
        props.setGroup(formData.addGroupBody)
        getGroups()
        deActivateEditMode()
    }

    return (<div className={style.wrap}>
        {!editMode && <input className={style.addGroup} onClick={activateEditMode} placeholder='Add group...' />}
        {editMode && <>
            <AddPostReduxForm onSubmit={onSubmit} />
            <button onClick={deActivateEditMode} className={style.backButton}>✚</button>
        </>
        }
    </div>)
}

export default AddGroup;