import React, { useEffect } from 'react'

const Alert = ({msg,type,removeAlert,item}) => {
  useEffect(()=>{
    const hideAlert =setTimeout(()=>{
     removeAlert({
       show:false,
       msg:'',
       type:''

     })
    },3000)
    return ()=> clearTimeout(hideAlert)
  },[item])
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
