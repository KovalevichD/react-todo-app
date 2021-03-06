import React from 'react';
import Tasks from './Tasks';
import { getTasks, setTask, deleteTask, editTask } from '../../Redux/tasks-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Route } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import style from './Tasks.module.css';

class TasksContainer extends React.Component {
    componentDidMount() {
        this.props.getTasks()
    }

    render() {
        return (<div className={style.tasks}>

            {this.props.groups.map(group => {

                return <Route
                    key={group.id}
                    path={`/groups/${group.id}`}
                    render={() => <Tasks
                        {...this.props}
                        tasks={this.props.tasks}
                        getTasks={this.props.getTasks}
                        setTask={this.props.setTask}
                        deleteTask={this.props.deleteTask}
                        editTask={this.props.editTask}/>} />
            })}
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasksPage.tasks,
        groups: state.groupsPage.groups
    }
}

export default compose(
    connect(mapStateToProps, { getTasks, setTask, deleteTask, editTask }),
    withRouter
)(TasksContainer)

