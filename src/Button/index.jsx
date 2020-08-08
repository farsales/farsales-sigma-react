import React, { Fragment } from 'react'
import constant from '../constants/index'
import styles from '../styles.module.css'

export default class Button extends React.Component{
    static defaultProps = {
        margin: false,
        padding: false,
        fontFamily: false
    }

    render(){
        let onClick = this.props.onClick ? {onClick: this.props.onClick} : {}
        let onChange = this.props.onChange ? {onChange: this.props.onChange} : {}
        let margin = this.props.margin ? {margin: this.props.margin}: {}
        let padding = this.props.padding ? {padding: this.props.padding}: {}
        let classNames = this.props.className ? ` ${this.props.className}` : ''
        let fontFamily = this.props.fontFamily ? 
            this.props.fontFamily === 'ONE' ? { fontFamily: constant.DEFAULT_FONT}
            : {fontFamily:this.props.fontFamily}
            : {};

    return <div
            {...this.props}
            className={`${styles.fsSigmaButton}${classNames}`}
            style={{...padding, ...margin, ...fontFamily}}
            >{this.props.text ? this.props.text : '-'}</div>
    }
  }