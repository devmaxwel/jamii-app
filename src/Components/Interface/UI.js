import React from 'react'
import classes from './ui.module.css';

function UI(props) {
    return (
        <div className={classes.card}>
        <div className={classes.container}>

        {props.children}
        </div>
    </div>
    )
}

export default UI;
