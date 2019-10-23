import { groupsAPI } from "../api/api";

const GET_GROUP_SUCCES = 'GET_GROUP_SUCCES';
const SET_GROUP_SUCCES = 'SET_GROUP_SUCCES';

const initialState = {
    groups: [],
}

const groupsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GROUP_SUCCES:
            return {
                ...state,
                groups: [...action.data]
            }

        case SET_GROUP_SUCCES:
            return {
                ...state,
                groups: [...state.groups, action.data]
            }

        default:
            return state;
    }
}

export const getGroupsSucces = (data) => ({ type: GET_GROUP_SUCCES, data });
export const setGroupSucces = (data) => ({ type: SET_GROUP_SUCCES, data });

export const getGroups = () => {
    return async (dispatch) => {

        const data = await groupsAPI.getGroups();
        
        if (data.statusText === "OK") {
            dispatch(getGroupsSucces(data.data))
        }
    }
}

export const setGroup = (groupName) => {
    return async (dispatch) => {

        const data = await groupsAPI.setGroup(groupName);

        if (data.statusText === "Created") {
            dispatch(setGroupSucces(data.data))
        }
    }
}

export const deleteGroups = (groupId) => {
    return async (dispatch) => {
        
        const data = await groupsAPI.deleteGroup(groupId);

        if (data.statusText === "OK") {
            dispatch(getGroups())
        }
    }
}

export const editGroup = (groupId, title) => {
    return async (dispatch) => {
        
        const data = await groupsAPI.editGroup(groupId, title);
        
        if (data.statusText === "OK") {
            dispatch(getGroups())
        }
    }
}

export default groupsReducer;