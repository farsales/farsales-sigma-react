export function getClasses(classes, stylesOb){
    let output = ' ' + classes.replace(/\s+/g, ',').split(',').filter(e=>e).map(e=> e.trim()).map(c=>{
        if(stylesOb[c]){
            return stylesOb[c];
        } else {
          return c;
        }
    }).join(' ');
    if(output == ' '){
        return ''
    } else {
        return output
    }
  }

