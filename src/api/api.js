import Axios from "axios";

const instanse = Axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});

export const groupsAPI = {
  getGroups() {
    return instanse.get('/groups')
  },

  setGroup(nameGroup) {
    return instanse.post('/groups', {title: nameGroup})
  },

  deleteGroup(groupId) {
    return instanse.delete('/groups/' + groupId)
  }
}


export const tasksAPI = {
  getTasks() {
    return instanse.get('/tasks')
  },

  setTask(taskBody, groupId) {
    return instanse.post('/tasks', {title: taskBody, groupId: groupId})
  },
  
  deleteTask(taskId) {
    return instanse.delete('/tasks/' + taskId)
  }
}