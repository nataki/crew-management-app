import React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import configureStore from 'redux-mock-store';
import ConnectedUserList, {UserList} from './UserList';
import {STATUS_LOADED} from "../../constants/index";
import {users} from "../../../__mocks__/usersMock";
import UserCard from "../../components/UserCard/index";
import styles from "./styles";

const classes = Object.keys(styles)
    .reduce(
        (prev, curr) => ({
            ...prev,
            [curr]: curr
        }),
        {}
    );

describe('UserList - snapshot',()=>{
    it('capturing snapshot of UserList', () => {
        const shallowRenderer = new ShallowRenderer();
        shallowRenderer.render(<UserList classes={classes} />);
        const renderedValue = shallowRenderer.getRenderOutput();
        expect(renderedValue).toMatchSnapshot();
    });
});

describe('Connected UserList - snapshot',() => {
    const initialState = {
        status: STATUS_LOADED,
        filters: {city: "", name: ""},
        users: users
    };
    const mockStore = configureStore();
    const shallowRenderer = new ShallowRenderer();
    let store, container;

    beforeEach(() => {
        store = mockStore(initialState);
    });

    it('pass properties from state', () => {
        shallowRenderer.render(<ConnectedUserList classes={classes} store={store} />);
        container = shallowRenderer.getRenderOutput();

        expect(container.props.appliedUsers.length).toEqual(2);
        expect(container.props.interviewedUsers.length).toEqual(1);
        expect(container.props.hiredUsers.length).toEqual(2);
    });

    it('match snapshot', () => {
        const testRenderer = renderer.create(<ConnectedUserList classes={classes} store={store} />).toJSON();
        expect(testRenderer).toMatchSnapshot();
    });


    it('render usercards by status', () => {
        const testRenderer = renderer.create(<ConnectedUserList classes={classes} store={store} />);
        const testInstance = testRenderer.root;
        const columns = testInstance.findAllByProps({className: "column"});

        expect(columns.length).toEqual(3);
        expect(columns[0].findAllByType(UserCard).length).toEqual(2);
        expect(columns[1].findAllByType(UserCard).length).toEqual(1);
        expect(columns[2].findAllByType(UserCard).length).toEqual(2);
    });
});
