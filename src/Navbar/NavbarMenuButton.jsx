import React, { Fragment } from 'react'
import ReactDOM from "react-dom";
import constant from '../constants/index'
import styles from '../styles.module.css'
import {NavbarButton} from './NavbarButton'

import {getClasses} from '../lib'
import CART_ICON from '../resouces/cart.svg'
import USER_ICON from '../resouces/user.svg'
import ABOUT_ICON from '../resouces/about.svg'
import ARROW_DOWN from '../resouces/arrow-down.svg'
export class NavbarMenuButton extends React.Component{
    constructor(props){
        super(props);
        this.state = { menuOpen: false };
        this.handleMenuClick = this.handleMenuClick.bind(this)
        // this.handleClickOutside = this.handleClickOutside.bind(this)
    }
    
    static defaultProps = {
        margin: false,
        padding: false,
        fontFamily: false
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, false);
    }

    handleClickOutside = event => {
     if(this.node.contains(event.target)){
         return;
     }
        this.setState({
            menuOpen: false
        });
    }


    getIco(props){
       const {icon} = props
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

    handleMenuClick(){
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }

    renderSubMenu(){
        let output = []
        Object.keys(this.props.menuItems).forEach(button=>{
            let {text, icon, onClick, menuItems} = this.props.menuItems[button];
            let thisProps = Object.assign({}, {text}, {icon}, onClick && {onClick});
            output.push(<NavbarButton data={'isSub'} className={styles.fsSigmaNavSubMenuItem} {...thisProps}/>)
        })
        return <div data={'isSub'} className={styles.fsSigmaNavSubMenu}>
        {output}
        </div>
    }

    render(){
        let margin = this.props.margin ? {margin: this.props.margin}: {}
        let padding = this.props.padding ? {padding: this.props.padding}: {}
        let classNames = this.props.className ? getClasses(this.props.className, styles) : ''
        let fontFamily = this.props.fontFamily ? 
            this.props.fontFamily === 'ONE' ? { fontFamily: constant.DEFAULT_FONT}
            : {fontFamily:this.props.fontFamily}
            : {};
            
        let rootIcoPath = this.getIco(this.props.rootMenu)

    return <div {...this.props}
                    ref={node=> this.node = node}
                    onClick={this.handleMenuClick}
                    className={`${styles.fsSigmaNavbarMenuButton}${classNames}`} style={{...padding, ...margin, ...fontFamily}}>
                <div className={styles.fsSigmaNavButtonText}>
                    {rootIcoPath && <img className={styles.fsSigmaNavButtonIco} src={rootIcoPath.ico} alt={rootIcoPath.alt}/>}
                    <span>{this.props.rootMenu.text}</span> <img className={styles.fsSigmaNavButtonIco} src={ARROW_DOWN} alt='menu'/>
                </div>
                {this.state.menuOpen && this.renderSubMenu()}
            </div>
    }
  }