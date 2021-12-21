import React from 'react'
import classes from './layout.module.css';
import Navigation from './Navigation';

function Layout(props) {
    return (
       <div >
           <Navigation />

          <main className={classes.main}>{props.children}</main>
       </div>
    )
}

export default Layout;