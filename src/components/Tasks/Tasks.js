import React from 'react';
import Task from './Task/Task';
import AddTask from './AddTask/AddTask';

const Tasks = ({ location, tasks, getTasks, setTask, deleteTask, editTask }) => {

  const groupId = +location.pathname.split('/').pop();
  const filterTasks = tasks.filter(task => task.groupId === groupId);

  return (<>
    <AddTask
      groupId={groupId}
      getTasks={getTasks}
      setTask={setTask} />
      
    {filterTasks.map(task => {
      return <Task
        key={task.id}
        taskBody={task.title}
        deleteTask={deleteTask}
        editTask={editTask}
        taskId={task.id}
        groupId={groupId} />
    })}
  </>)
}

export default Tasks;