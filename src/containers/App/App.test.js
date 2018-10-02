import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {App} from './App';
import styles from "./styles";

//override generated classnames
const classes = Object.keys(styles)
    .reduce(
        (prev, curr) => ({
            ...prev,
            [curr]: curr
        }),
        {}
    );

describe('App - Snapshot',() => {
    it('capturing Snapshot of App', () => {
        const renderer = new ShallowRenderer();
        renderer.render(<App />);
        const renderedValue = renderer.getRenderOutput();
        expect(renderedValue).toMatchSnapshot();
    });
});