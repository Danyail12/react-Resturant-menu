import React, { useState } from 'react'
import Menu from './MenuApi'
import MenuCard from './MenuCard';

const Resturant = () => {
  const [menuData,setMenuData]=useState(Menu);
  const filterItem=(category)=>{
    const updated = Menu.filter((currentElem) =>{
      return currentElem.category === category;
    }
    );
   
    setMenuData(updated);
  }
  
  return (
  <>
  <nav className='navbar'>

<div className='btn-group'>
  <button className='btn-group-items' onClick={()=>filterItem("BreakFast")}>BreakFast</button>
  <button className='btn-group-items' onClick={()=>filterItem("Lunch")}>Lunch</button>
  <button className='btn-group-items'onClick={()=>filterItem("Dinner")}>Dinner</button>
  <button className='btn-group-items' onClick={()=>setMenuData(Menu)}>All</button>
</div>
</nav> 

  <MenuCard menuData={menuData}/>
  </>
  )
}

export default Resturant
