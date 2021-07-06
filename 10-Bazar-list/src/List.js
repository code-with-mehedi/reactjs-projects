import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({id,title,deleteItem,editItem}) => {
  
  return (<>
        <div className="grocery-item" key={id} >

          <p className="title"> {title} </p>
          <div className="btn-container">
            <button className={'edit-btn'} onClick={()=>editItem(id)}><FaEdit /> </button>
            <button className={'delete-btn'} onClick={()=>deleteItem(id)}><FaTrash /> </button>
          </div>
          
        </div>
        </>);
}

export default List
