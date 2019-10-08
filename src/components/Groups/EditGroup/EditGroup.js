import React, { useState } from 'react';
import style from '../Groups.module.css'

const EditGroup = ({ groupTitle, deActivateEditMode }) => {
    const [titleGroup, setTitleGroup] = useState(groupTitle);

    const onChangeTitleGroup = (e) => {
        setTitleGroup(e.target.value)
    }

    return (<input value={titleGroup} onChange={onChangeTitleGroup} onBlur={deActivateEditMode} autoFocus={true} className={style.editInput} />
    )
}

export default EditGroup;