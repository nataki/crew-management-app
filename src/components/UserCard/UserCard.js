// @flow
import React from 'react';
import injectSheet from 'react-jss';
import {compose} from 'recompose';
import styles from './styles';

type Props = {
    classes: { user_card: string, user_info: string, user_photo: string, user_name: string, controls: string},
    id: string,
    image: string,
    name: string,
    location: string,
    onLeftClick: () => void,
    onRightClick: () => void,
}

const UserCard = ({classes, id, image, name, location, onLeftClick, onRightClick}: Props) => (
    <div className={classes.user_card}>
        <div className={classes.user_info}>
            <div className={classes.user_photo}>
                <img src={image} alt={name} />
            </div>
            <div className={classes.user_name}>
                {name}
                <div>{location}</div>
            </div>
        </div>
        <div className={classes.controls}>
            {onLeftClick && <button onClick={onLeftClick}>Left</button>}
            {onRightClick && <button onClick={onRightClick}>Right</button>}
        </div>
    </div>
);

export default compose(
    injectSheet(styles)
)(UserCard);