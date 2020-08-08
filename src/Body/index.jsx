import React, { Fragment } from 'react'
import styles from '../styles.module.css'

export default class Body extends React.Component {
    render(){
      return <div className={styles.fsSigmaBody}>{this.props.children}</div>
    }
}