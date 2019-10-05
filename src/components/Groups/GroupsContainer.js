import React from 'react';
import { connect } from 'react-redux';
import { getGroups, deleteGroups, editGroup } from '../../Redux/groups-reducer';
import { compose } from 'redux';
import Groups from './Groups';

class GroupsContainer extends React.Component {
    componentDidMount() {
        this.props.getGroups();
    }

    render() {
        return (
            <Groups
                groups={this.props.groups}
                tasks={this.props.tasks}
                deleteGroups={this.props.deleteGroups}
                editGroup={this.props.editGroup} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        groups: state.groupsPage.groups,
        tasks: state.tasksPage.tasks
    }
}

export default compose(
    connect(mapStateToProps, { getGroups, deleteGroups, editGroup }),
)(GroupsContainer)

