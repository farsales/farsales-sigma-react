import React, { Fragment } from 'react'
import constant from '../constants/index'
import styles from '../styles.module.css'
import {getClasses} from '../lib'
export default class TextBox extends React.Component {
  static defaultProps = {
    placeholder: false,
}
  
    render(){
      let margin = this.props.margin ? {margin: this.props.margin}: {}
      let padding = this.props.padding ? {padding: this.props.padding}: {}
      // let classNames = this.props.className ? `${this.props.className}` : ''
      let classNames = this.props.className ? getClasses(this.props.className, styles) : ''
      let fontFamily = this.props.fontFamily ? 
            this.props.fontFamily === 'ONE' ? { fontFamily: constant.DEFAULT_FONT}
            : {fontFamily:this.props.fontFamily}
            : {};
      return <Fragment>
        <input type="text" 
        {...this.props}
        className={`${styles.fsSigmaTextBox} ${classNames}`}
        style={{...padding, ...margin, ...fontFamily}}
        />
      </Fragment>
    }
}