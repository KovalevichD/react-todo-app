import { tasksAPI } from "../api/api";

const GET_TASKS_SUCCES = 'GET_TASKS_SUCCES';
const SET_TASK_SUCCES = 'SET_TASK_SUCCES';

const initialState = {
    tasks: [],
}

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TASKS_SUCCES:
            return {
                ...state,
                tasks: [...action.data]
            }

        case SET_TASK_SUCCES:
            return {
                ...state,
                tasks: [...state.tasks, action.task]
            }

        default:
            return state;
    }
}

export const getTasksSucces = (data) => ({ type: GET_TASKS_SUCCES, data });
export const setTaskSucces = (task) => ({ type: SET_TASK_SUCCES, task });

export const getTasks = () => {
    return async (dispatch) => {

        const data = await tasksAPI.getTasks();

        if (data.statusText === "OK") {
            dispatch(getTasksSucces(data.data))
        }

    }
}

export const setTask = (taskBody, groupId) => {
    return async (dispatch) => {

        const data = await tasksAPI.setTask(taskBody, groupId);

        if (data.statusText === "Created") {
            dispatch(setTaskSucces(data.data))
        }
    }
}

export const deleteTask = (taskId) => {
    return async (dispatch) => {
        
        const data = await tasksAPI.deleteTask(taskId);

        if (data.statusText === "OK") {
            dispatch(getTasks())
        }
    }
}

export default tasksReducer;