import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories=['all',...new Set( items.map((item)=>item.category))];

function App() {
  const [menus,setMenus]=useState(items);
  const [categories,setCategory]= useState(allCategories);
  const filterItems=(categories)=>{
    if(categories=='all'){
      setMenus(items);
      return;
    }
    const filtered= items.filter((item)=>item.category==categories);
    setMenus(filtered);
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={allCategories} filterItems={filterItems}/>
        <Menu items={menus}/>
      </section>
    </main>
  );
}

export default App;
