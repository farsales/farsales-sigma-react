import React, { Fragment } from 'react'
import constant from '../constants/index'
import styles from '../styles.module.css'
import {getClasses} from '../lib'
import _omit from 'lodash.omit'
export class NavbarLogo extends React.Component{
  static defaultProps = {
    margin: false,
    padding: false,
    fontFamily: false,
    defaultLogoType: 'default',
    type: false,
    logoPaths: {
      default: './img/logo-wide_small.png',
    }
  }

  render(){
    let logoPath = this.props.type ? this.props.logoPaths[this.props.type] :  this.props.logoPaths[this.props.defaultLogoType]
    let margin = this.props.margin ? {margin: this.props.margin}: {}
    let padding = this.props.padding ? {padding: this.props.padding}: {}
    let classNames = this.props.className ? getClasses(this.props.className, styles) : ''
    let fontFamily = this.props.fontFamily ? 
    this.props.fontFamily === 'ONE' ? { fontFamily: constant.DEFAULT_FONT}
    : {fontFamily:this.props.fontFamily}
    : {};
    // remove unnecessary props
    let defaultProps = _omit(this.props, ['logoPaths', 'type', 'defaultLogoType', 'logo', 'buttons'  ])
    return <Fragment>
    <img 
     {...defaultProps}
     className={`${styles.fsSigmaNavbarLogo}${classNames}`}
     style={{...padding, ...margin, ...fontFamily}}
    src={logoPath}/>
  </Fragment>
  }
}