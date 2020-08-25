import React, { Fragment } from 'react'
import constant from '../constants/index'
import styles from '../styles.module.css'
import {getClasses} from '../lib'
import CART_ICON from '../resouces/cart.svg'
import USER_ICON from '../resouces/user.svg'
import ABOUT_ICON from '../resouces/about.svg'
export class NavbarButton extends React.Component{
    static defaultProps = {
        margin: false,
        padding: false,
        fontFamily: false
    }
    getIco(){
       const {icon} = this.props
       if(icon ===undefined){
           return false
       } else {
           if(icon === 'cart'){
               return {ico: CART_ICON, alt: 'cart'}
           } else if(icon === 'user'){
            return {ico: USER_ICON, alt: 'user'}
           } else if(icon === 'about'){
            return {ico: ABOUT_ICON, alt: 'about'}
           }
       }
    }
    render(){
        let margin = this.props.margin ? {margin: this.props.margin}: {}
        let padding = this.props.padding ? {padding: this.props.padding}: {}
        let classNames = this.props.className ? getClasses(this.props.className, styles) : ''
        let fontFamily = this.props.fontFamily ? 
            this.props.fontFamily === 'ONE' ? { fontFamily: constant.DEFAULT_FONT}
            : {fontFamily:this.props.fontFamily}
            : {};

        let icoPath = this.getIco()

    return <div
            {...this.props}
            className={`${styles.fsSigmaNavButton}${classNames}`}
            style={{...padding, ...margin, ...fontFamily}}
            ><div
            className={styles.fsSigmaNavButtonText}
    >{icoPath && <img className={styles.fsSigmaNavButtonIco} src={icoPath.ico} alt={icoPath.alt}/>}<span>{this.props.text}</span></div>
            </div>
    }
  }