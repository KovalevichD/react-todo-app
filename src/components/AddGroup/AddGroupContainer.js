import React from 'react';
import { connect } from 'react-redux';
import AddGroup from './AddGroup';
import { getGroups, setGroup } from '../../Redux/groups-reducer';
import { compose } from '../../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';

const AddGroupContainer = (props) => {
    return (<AddGroup
        getGroups={props.getGroups}
        groups={props.groups}
        setGroup={props.setGroup} />)
}

const mapStateToProps = (state) => {
    return {
        groups: state.groupsPage.groups
    }
}

export default compose(
    connect(mapStateToProps, { getGroups, setGroup }),
)(AddGroupContainer)