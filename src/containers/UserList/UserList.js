/* @flow */
import React, {Component, Fragment} from "react";
import injectSheet from 'react-jss';
import {compose} from 'recompose';
import {connect} from "react-redux";
import UserCard from "../../components/UserCard";
import {changeUserStatus} from "../../actions";
import {getAppliedUsers, getHiredUsers, getInterviewedUsers} from "../../selectors";
import {USER_STATUS_APPLIED, USER_STATUS_HIRED, USER_STATUS_INTERVIEWED} from "../../constants";
import styles from './styles';

type User = {
    +id: string,
    +name: string,
    +image: string,
    +city: string,
}

type Props = {
    classes: { column: string, category_title: string},
    appliedUsers: Array<User>,
    interviewedUsers: Array<User>,
    hiredUsers: Array<User>,
    moveToInterviewed: (id: string) => void,
    moveToApplied: (id: string) => void,
    moveToHired: (id: string) => void,
};

export const UserList = (props: Props) => {
    const {
        classes,
        appliedUsers,
        interviewedUsers,
        hiredUsers,
        moveToInterviewed,
        moveToApplied,
        moveToHired,
    } = props;

    return (
        <Fragment>
            <div className={classes.column}>
                <div className={classes.category_title}>
                    Applied
                </div>
                {appliedUsers && appliedUsers.map(user => (
                    <UserCard
                      image={user.image}
                      name={user.name}
                      location={user.city}
                      onRightClick={() => moveToInterviewed(user.id)}
                      key={user.id}
                    />
                ))}
            </div>
            <div className={classes.column}>
                <div className={classes.category_title}>
                    Interviewed
                </div>
                {interviewedUsers && interviewedUsers.map(user => (
                    <UserCard
                      image={user.image}
                      name={user.name}
                      location={user.city}
                      onLeftClick={() => moveToApplied(user.id)}
                      onRightClick={() => moveToHired(user.id)}
                      key={user.id}
                    />
                ))}
            </div>
            <div className={classes.column}>
                <div className={classes.category_title}>
                    Hired
                </div>
                {hiredUsers && hiredUsers.map(user => (
                    <UserCard
                      image={user.image}
                      name={user.name}
                      location={user.city}
                      onLeftClick={() => moveToApplied(user.id)}
                      key={user.id}
                    />
                ))}
            </div>
        </Fragment>
    );
};

UserList.defaultProps = {
    appliedUsers: [],
    interviewedUsers: [],
    hiredUsers: [],
    moveToInterviewed: () => {},
    moveToApplied: () => {},
    moveToHired: () => {},
};

const mapStateToProps = (state) => ({
    appliedUsers: getAppliedUsers(state),
    interviewedUsers: getInterviewedUsers(state),
    hiredUsers: getHiredUsers(state)
});
const mapDispatchToProps = dispatch => ({
    moveToInterviewed: (id) => dispatch(changeUserStatus(id, USER_STATUS_INTERVIEWED)),
    moveToApplied: (id) => dispatch(changeUserStatus(id, USER_STATUS_APPLIED)),
    moveToHired: (id) => dispatch(changeUserStatus(id, USER_STATUS_HIRED))
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    injectSheet(styles),
)(UserList);