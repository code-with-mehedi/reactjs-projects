import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading]= useState(true);
  const [tours, setTour]=useState([]);

  const fetchTours= async ()=>{
    
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTour(tours);
      setLoading(false);
    } catch (error) {
      setLoading(false)
      console.log(error)
      
    }
    
  }

  const removeTour=(id)=>{
    const newTour = tours.filter((tour)=> tour.id !== id );
    setTour(newTour)
    
  }

  useEffect(()=>{
    fetchTours();
  },[])
  if(loading){
    return <div>
      <Loading />
    </div>
  }
  if(tours.length ===0){
    return <main>
    <h2>No tours left</h2>
    <button className="btn" onClick={()=> fetchTours()}>Refresh</button>
  </main>
  }
  return <main>
    <Tours tours={tours} removeTour={removeTour}/> 
  </main>
}

export default App
