import React from 'react';

const List = ({ people }) => {
  
  return (
    <>
      {
        people.map((birthday)=>{
          const {id,name,age,image}= birthday
          return <div key={id} className="person">
            <img src={image} alt="" />
            <div>
              <p>age:{age}</p>
              <h3>Name: {name}</h3>
            </div> 

          </div>
        })
      }
    </>
  );
};

export default List;
