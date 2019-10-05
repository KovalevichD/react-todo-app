import React, { useState } from 'react';
import style from './Groups.module.css';
import { NavLink } from 'react-router-dom';

const Groups = ({ groups, deleteGroups, tasks, editGroup }) => {
    const [editMode, setEditMode] = useState(false);
    const [editGroupId, setEditGroupId] = useState(null);
    const [titleGroup, setTitleGroup] = useState(null);

    const deleteGroup = (e) => {
        deleteGroups(e.target.parentNode.firstChild.getAttribute('href').split('/').pop());
    }

    const activateEditMode = (groupId) => {
        setEditMode(true);
        const id = groupId;
        setEditGroupId(id);
    }

    const deActivateEditMode = (e) => {
        const groupTitile = e.target.value;

        editGroup(editGroupId, groupTitile);
        setEditMode(false);
    }

    // const onChangeEditGroup = (e) => {
    //     setTitleGroup(e.target.value);
    // }

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
                            : <input defaultValue={group.title} onBlur={deActivateEditMode} autoFocus={true} className={style.editInput} />}
{/* input получился c  defaultValue. Так как эти группы мапятся(строка 35), я не знаю как мне указать начальное значение в titleGroup(строка 8). То есть
    я не знаю как отследить к примеру id группы, по которой был сделан клик, чтобы потом название именно этой группы установить в titleGroup. Следовательно 
    я не могу в этом input(строка 46) указать value={titleGroup}. Как можно решить эту проблему? А если у этого input не будет onChange, как сейчас, это очень плохо?*/}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Groups;