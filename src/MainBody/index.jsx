import React, { Fragment } from 'react'
import styles from '../styles.module.css'
const fs =require('fs');
const path = require('path');

function stylesCSS(){
  const cssStylesPath = path.resolve(__dirname, '../basestyle.css')
  console.log(`cssStylesPath: ${fs.existsSync(cssStylesPath)}`)
  return ''//fs.readFileSync(cssStylesPath, 'utf8')
}

export default class MainBody extends React.Component {
    render(){
      return <div className={styles.fsSigmaMainBody}>{this.props.children}</div>
      
      // <html>
      //   <head>
          // <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
          // <meta name='viewport' content='initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,width=device-width,height=device-height,target-densitydpi=device-dpi,user-scalable=no' />
      //     <title>{this.props.title}</title>
      //     <style type='text/css' dangerouslySetInnerHTML={{__html: stylesCSS()}} />
      //   </head>
      //   <body>
    //   <table cellPadding='0' cellSpacing='0' border='0' width='100%'>
    //   <tbody>
    //     <td style={{fontSize: '0px'}}></td>
    //     <td width='100%' align='center' className={styles.fsSigmaMainBody}>
    //       {this.props.children}
    //     </td>
    //     <td style={{fontSize: '0px'}}></td>
    //   </tbody>
    // </table>
      //   </body>
      // </html>
      // 
    }
}