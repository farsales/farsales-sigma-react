import React, { Fragment } from 'react'
import constant from '../constants/index'
import styles from '../styles.module.css'
import {NavbarButton} from './NavbarButton'
import {NavbarLogo} from './NavBarLogo'
import {NavBarDivider} from './NavBarDivider'
import {NavbarMenuButton} from './NavbarMenuButton'
import {getClasses} from '../lib'
import _omit from 'lodash.omit'

class Navbar extends React.Component{
  static defaultProps = {
    margin: false,
    padding: false,
    fontFamily: false,
    defaultLogoType: 'default', 
    className: 'fsSigmaNavbarLeft'
  }

  renderSubMenu(menuItems, rootMenu){
    console.log(`menuItems`)
    console.log(menuItems)
    return <NavbarMenuButton rootMenu={rootMenu} menuItems={menuItems} />
  }


  renderButtons(){
    let {buttons} = this.props;
    if(!buttons){
      return null
    }

    let output = []
    Object.keys(buttons).forEach(button=>{
      let {text, icon, onClick, menuItems} = buttons[button];
      let thisProps = Object.assign({}, {text}, {icon}, onClick && {onClick});
      output.push(<NavBarDivider />)
      
      if(menuItems !== undefined){
        // Render sub menu
        let menuBarMenu = this.renderSubMenu(menuItems, thisProps)
        output.push(menuBarMenu)
      }else {
        // render non-sub menu
        output.push(<NavbarButton {...thisProps}/>)
      }
    })
    
    return output
  }

  render(){
    let margin = this.props.margin ? {margin: this.props.margin}: {}
    let padding = this.props.padding ? {padding: this.props.padding}: {}
    let classNames = this.props.className ? getClasses(this.props.className, styles) : ''
    let fontFamily = this.props.fontFamily ? 
    this.props.fontFamily === 'ONE' ? { fontFamily: constant.DEFAULT_FONT}
    : {fontFamily:this.props.fontFamily}
    : {};
    
    // remove unnecessary props
    let defaultProps = _omit(this.props, ['defaultLogoType', 'logo', 'buttons'])

    return <div 
    {...defaultProps}
    className={`${styles.fsSigmaNavbar}${classNames}`}
    style={{...padding, ...margin, ...fontFamily}}
  ><Fragment>
    <NavbarLogo {...this.props} {...this.props.logo}/>
    {this.renderButtons()}
  </Fragment></div>
  }
}


export default Navbar;