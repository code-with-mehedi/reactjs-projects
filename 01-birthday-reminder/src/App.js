import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [ people ,  updatePeople ]= useState(data)
  return (
    <div className="container">
       <h3>{people.length} people birthday today</h3>
       <List people={people} />
       <button className="btn" onClick={()=>updatePeople([])}>Clear Notification</button>
    </div>
  );
}

export default App;
