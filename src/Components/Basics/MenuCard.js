import React from 'react'

const MenuCard = ({menuData}) => {
  return (
    <>
    <section className='cr'>

    {menuData.map((currentElemnt)=>{
      return(
        <>
     <div className='card-container'key={currentElemnt.id}>
    <div className='card'>
<div className='card-body'>
  <span className='number'>{currentElemnt.id}</span>
  <span className='card-category'>{currentElemnt.category}</span>
<h2 className='card-title'>{currentElemnt.name}</h2>
<span className='card-description'>{currentElemnt.descrpition}</span>
<div className='card-read'>{currentElemnt.price}</div>
<img src={currentElemnt.image} alt='images' className='image'/>
<button className='btn'>Order</button>
</div>

    </div>
  </div> 
  </>
      )
    })}
    </section>
    </>
  )

}

export default MenuCard
