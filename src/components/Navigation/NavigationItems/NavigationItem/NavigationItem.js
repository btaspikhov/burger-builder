import React from 'react';

import classes from './NavigationItem.css';

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <a href={props.link} className={props.active ? classes.active : 0}>
      {props.children}
    </a>
  </li>
);

export default navigationItem;
