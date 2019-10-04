import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import GroupsContainer from './components/Groups/GroupsContainer';
import TasksContainer from './components/Tasks/TasksContainer';
import AddGroupContainer from './components/AddGroup/AddGroupContainer';
import Greeting from './components/Greeting/Greeting';
import { Route } from 'react-router-dom';


function App() {

  return (<div className='containerHeader'>
    <div className='container'>
      <Header />
      <AddGroupContainer />
      <GroupsContainer />
      <TasksContainer />
      <Route exact path={'/'} render={() => <Greeting />} />
    </div>
  </div>
  )
}

export default App;
//json-server --watch db.json
//json-server -p 4000 db.json