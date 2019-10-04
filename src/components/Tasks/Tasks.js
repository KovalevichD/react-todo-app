import React from 'react';
import Task from './Task/Task';
import AddTask from './AddTask/AddTask';

const Tasks = ({ location, tasks, getTasks, setTask, deleteTask, ...props }) => {

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
        body={task.title}
        deleteTask={deleteTask}
        taskId={task.id} />
    })}
  </>)
}

export default Tasks;