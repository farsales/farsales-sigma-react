import React, { Fragment } from 'react'
import constant from '../constants/index'
import styles from '../styles.module.css'

export default class Headline extends React.Component {
  render(){
    let padding = this.props.padding ? {padding: this.props.padding}: {}
    let margin = this.props.margin ? {margin: this.props.margin}: {}
    let classNames = this.props.className ? ` ${this.props.className}` : ''
    return <p 
    {...this.props} 
    className={`${styles.fsSigmaHeadline}${classNames}`}
    style={{...padding, ...margin}}
    >{this.props.children}</p>
  }
}