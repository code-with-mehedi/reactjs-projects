import React, { useState, useEffect } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

import List from './List'
import Alert from './Alert'

const getLocalStorageVal=()=>{
  let list = localStorage.getItem('list');
  if(list){
    return JSON.parse(localStorage.getItem('list'));
  }
  else{
    return []
  }
}

function App() {

  const [item,setItem]=useState('');
  const [lists,setList]=useState(getLocalStorageVal());
  const [isEditing,setEditing]=useState(null);
  const [editId,setEditId]=useState(null);
  const [alert,setAlert]=useState({
    show:false,
    msg:'',
    type:''
  });

  const handleSubmit=(e)=>{
      e.preventDefault();
      if(!item){
        showAlert(true, 'danger','Please enter value')
      }
      else if(item && isEditing){
        setList(
          lists.map((list)=>{
            if(list.id===editId){
              //return true
              return {...list,title:item}
            }
            return list;
          }))
          showAlert(true, 'success','Item updated successfully')
          setItem('')
          setEditId(null)
          setEditing(false)

      }
      else{
        showAlert(true, 'success','Item added to the list')
        const singleItem={id:new Date().getTime().toString(),title:item};
        setList([...lists,singleItem]);
        setItem('')
      }
  }
  //remove total items
  const clearItems=()=>{
    showAlert(true, 'danger','Items cleared');
    setList([])
  }
  //delete Items
  const deleteItem=(id)=>{
  setList(lists.filter((list)=> list.id !== id));
  showAlert(true, 'danger','Item deleted successfully');
  }
  //edit Item
  const editItem=(id)=>{
    let edit=lists.find((list)=>list.id === id);
    setEditing(true);
    setEditId(id);
    setItem(edit.title);

  }
  //showAlert
  const showAlert=(show=false,type="",msg="")=>{
    setAlert({show,type,msg})
  }
  //set item to local storage
  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(lists))

  },[lists])
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
       {alert.show && <Alert {...alert} item={item} removeAlert={setAlert}/>}

        <h3>Bazar List</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={item}
            onChange={(e)=>setItem(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
          {isEditing ? 'Edit':'Submit'}
          </button>
        </div>
      </form>
      {lists.length>0 &&
        <div className='grocery-list'>
          {lists.map((list)=>{
           return <List {...list} deleteItem={deleteItem} editItem={editItem}/>
          })}
          <button className='clear-btn' onClick={()=>clearItems()}>
            clear items
          </button>
        </div>
      }
    </section>
  );
}

export default App
