/* @flow */

import React, {Component} from "react";
import {connect} from "react-redux";
import injectSheet from 'react-jss';
import {compose} from 'recompose';

import styles from "./styles";
import FilterForm from "../FilterForm";
import UserList from "../UserList";
import {fetchUsersAction} from "../../actions";
import {STATUS_LOADING} from "../../constants";

type Props = {
    classes: { app: string, header: string, container: string },
    status: string,
    fetchUsers: () => void,
};

export class App extends Component<Props> {

    static defaultProps = {
        classes: {},
        status: STATUS_LOADING,
        fetchUsers: () => {},
    };

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        const {
            classes,
            status,
        } = this.props;

        return (
            <div className={classes.app}>
                <div className={classes.header}>
                    <FilterForm />
                </div>
                <div className={classes.container}>
                    {status === STATUS_LOADING ? (
                        <h2>Loading...</h2>
                    ) : (
                        <UserList />
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    status: state.status,
});
const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsersAction()),
});

export default compose(
    injectSheet(styles),
    connect(mapStateToProps, mapDispatchToProps)
)(App);