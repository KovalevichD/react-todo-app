import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import groupsReducer from './groups-reducer';
import tasksReducer from './tasks-reducer';
import { reducer as formReducer } from 'redux-form';

const redusers = combineReducers({
    groupsPage: groupsReducer,
    tasksPage: tasksReducer,
    form: formReducer,
})

const store = createStore(redusers, applyMiddleware(thunkMiddleware));
window.store = store
export default store;