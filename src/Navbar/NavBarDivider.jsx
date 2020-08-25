import React, { Fragment } from 'react'
import constant from '../constants/index'
import styles from '../styles.module.css'
import {getClasses} from '../lib'
import _omit from 'lodash.omit'
export class NavBarDivider extends React.Component{
  static defaultProps = {
    margin: false,
    padding: false,
    fontFamily: false,
    type: false,
  }

  render(){
    
    return <span className={styles.fsSigmaNavbarDivider}></span>
  }
}