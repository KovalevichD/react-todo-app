import React from 'react';
import style from './Groups.module.css';
import { NavLink } from 'react-router-dom';

const Groups = ({ groups, deleteGroups, tasks }) => {

    const deleteGroup = (e) => {
        deleteGroups(e.target.parentNode.firstChild.getAttribute('href').split('/').pop());
    }

    return (
        <div className={style.groups}>
            <ul className={style.list}>

                {groups.map(group => {

                    return <li key={group.id} className={style.item}>

                        <NavLink to={`/groups/${group.id}`} activeClassName={style.active} >{group.title}</NavLink>
                        <span className={style.count}>{tasks.filter(task => task.groupId === group.id).length}</span>
                        <span className={style.editButton}>edit</span>
                        <span className={style.deletebutton} onClick={deleteGroup}>✚</span>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Groups;