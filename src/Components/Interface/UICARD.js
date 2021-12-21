import React from 'react'
import classes from './uicard.module.css'

function UICARD(props) {
    return (
        <div className={classes.card}>
        <div className={classes.container}>

        {props.children}
        </div>
    </div>
    )
}

export default UICARD;
