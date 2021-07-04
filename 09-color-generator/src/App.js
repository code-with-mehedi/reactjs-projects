import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor]=useState('');
  const [error, setError]=useState(false);
  const [list,setList]=useState(new Values('#222').all(10));
  const [colorPercent,setColorPercent]=useState('10');
  
  const handleColorPercent= (e)=>{
      const colorper= parseInt(e.target.value);
      setColorPercent(colorper)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    try {
       let colors = new Values(color).all(colorPercent);
       setList(colors)
       setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }
  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f15025'
            className={`${ error ? 'error': null}`}
          />
          <label htmlFor="color-percent">%</label>
          <input type="number" name="color-percent" style={{ width:`80px `}} value={colorPercent}  onChange={handleColorPercent}/>
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        { list.map((color,index)=>{

          return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />

        })}
      </section>
    </>
  )
}

export default App
