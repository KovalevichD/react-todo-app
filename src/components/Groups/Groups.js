import React, { useState } from 'react';
import style from './Groups.module.css';
import { NavLink } from 'react-router-dom';

const Groups = ({ groups, deleteGroups, tasks, editGroup }) => {
    const [editMode, setEditMode] = useState(false);
    const [editGroupId, setEditGroupId] = useState(null);


    const deleteGroup = (e) => {
        deleteGroups(e.target.parentNode.firstChild.getAttribute('href').split('/').pop());
    }

    const activateEditMode = (groupId) => {
        setEditMode(true);
        const id = groupId;
        setEditGroupId(id)
    }

    const deFctivateEditMode = (e) => {
        editGroup(editGroupId, e.target.value)
        setEditMode(false);
    }

    return (
        <div className={style.groups}>
            <ul className={style.list}>

                {groups.map(group => {

                    return <li key={group.id} className={style.item}>
                        {!editMode || group.id !== editGroupId
                            ? <>
                                <NavLink to={`/groups/${group.id}`} activeClassName={style.active} >{group.title}</NavLink>
                                <span className={style.count}>{tasks.filter(task => task.groupId === group.id).length}</span>
                                <span className={style.editButton} onClick={() => { activateEditMode(group.id) }}>edit</span>
                                <span className={style.deletebutton} onClick={deleteGroup}>✚</span>
                            </>
                            : <input defaultValue={group.title} onBlur={deFctivateEditMode} autoFocus={true} className={style.editInput} />}

                    </li>
                })}
            </ul>
        </div>
    )
}

export default Groups;