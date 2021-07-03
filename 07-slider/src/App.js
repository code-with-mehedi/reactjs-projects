import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [persons, setPerson]=useState(data);
  const [value,setValue]= useState(0);

  const nextSlide=(index)=>{
    let next=index+1;
    setValue(next);
    if(value>=persons.length-1){
      return setValue(0);
    }  
  }

  const prevSlide=(index)=>{
    let prev=index-1;
    setValue(prev);
    if(value<=0){
      let lastSlide=persons.length-1;
      return setValue(lastSlide);
    } 
  }
  useEffect(()=>{
    let autoPlay=setTimeout(()=>{
      let increment= value+1;
      setValue(increment);
      if(value>=persons.length-1){
        return setValue(0);
      }
    },5000)
    return () => clearTimeout(autoPlay);
  },[value])
  return <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
       { persons.map((person,index )=>{
         const {image,name,title,quote}=person;
         let position='nextSlide';
         if(index===value){
           position='activeSlide'
         }
        if(index===value-1){
           position='lastSlide'
         }
         return <article key={index} className={position}>
              <img src={image} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
      })}
        <button className="prev" onClick={()=> prevSlide(value)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={()=> nextSlide(value)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
}

export default App;
