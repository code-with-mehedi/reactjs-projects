import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight,index,hexColor}) => {
  const [alert,setAlert]=useState(false);
  //convert rgb color array to string
  //const bcg=rgb.join(',');
  //use this rgbToHex to conver rgb color to hex color
  //const hex = rgbToHex(...bcg);
  const hexcolor= `#${hexColor}`
  //copy color to clipboard
  const copyColor=()=>{
    navigator.clipboard.writeText(hexcolor);
    setAlert(true)
  }
  //hide copy to clipboard after 3 second
  useEffect(()=>{
    const hideAlert=setTimeout(()=>{
      setAlert(false)
    },300)
    return ()=>clearTimeout(hideAlert)
  },[alert]);
  return <section className={`color ${index>10 && 'color-light'}`} style={{backgroundColor:`#${hexColor}`}}
  onClick={copyColor}
  >
    <p className="percent-value">{weight}%</p>
    <p className="color-value">{hexcolor}</p>
    <p className="text-copied">{alert && 'color copied to clipboard'}</p>
    </section>
}

export default SingleColor
