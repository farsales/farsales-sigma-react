import React, { Fragment } from 'react'
import constant from '../constants/index'
import styles from '../styles.module.css'

export default class Paragraph extends React.Component{
  static defaultProps = {
    margin: false,
    padding: '5px',
    fontFamily: false
  }

  render(){
    let margin = this.props.margin ? {margin: this.props.margin}: {}
    let classNames = this.props.className ? ` ${this.props.className}` : ''
    let fontFamily = this.props.fontFamily ? 
    this.props.fontFamily === 'ONE' ? { fontFamily: constant.DEFAULT_FONT}
    : {fontFamily:this.props.fontFamily}
    : {};
    return <p 
    {...this.props}
    className={`${styles.fsSigmaParagraph}${classNames}`}
    style={{padding: this.props.padding, ...margin, ...fontFamily}}
    >{this.props.children}</p>
  }
}