import React, { useState } from 'react';
import data from './data';
function App() {

  const [dummytext,updateText]=useState([]);
  const [count,countUpdate]=useState(0);

  const handleSubmit=(e)=>{
    e.preventDefault();
    let total= parseInt(count);
    
    if(count<=0){
      total=1
    }
    if(count>8){
      total=8
    }
    updateText(data.slice(0,total));
  }
  
  return (
  <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e)=>countUpdate(e.target.value)}
        />
        <button className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
       {
         dummytext.map((text,index)=>{
           return <p key={index}>{text}</p>

         })
       }
      </article>
    </section>
    )
}

export default App;
