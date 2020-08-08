import React, { Fragment } from 'react'
import styles from '../styles.module.css'

export default class MainBody extends React.Component {
    render(){
      return <div className={styles.fsSigmaMainBody}>{this.props.children}</div>
    }
}