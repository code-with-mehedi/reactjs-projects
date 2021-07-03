import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading]=useState(true);
  const [jobs,setJobs]=useState([]);
  const [value,setValue]=useState(0);

  const fetchJobs= async ()=>{
    let response= await fetch(url);
    let jobs= await response.json();
    setJobs(jobs);
    setLoading(false);
  }
  useEffect(()=>{
    fetchJobs();
  },[]);
  if(loading){
     return <div className="title">
        <h2>Loading ...</h2>
      </div>
  }
  const {title,dates,duties,company}=jobs[value];
   
  return <>
      <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {
            jobs.map((job,index)=>{
              return <button className={`job-btn ${ index==value && 'active-btn' }`} onClick={()=> setValue(index) }>{job.company}</button>
            })
            
          }
          

        </div>
        {/* job info */}
        
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty)=>{
            return <div  className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
          </div>
          })}
        </article>
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
    </>
}

export default App
