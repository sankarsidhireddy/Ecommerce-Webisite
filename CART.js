import React from 'react'
import "./Card1.css"
import "./App.css"
let  CART = (props) => {
  let x=props.data
  return (
    <div>
    {x.map((data)=>{
      return(
        <div className='cartmain'>
      <div className='con'>
        <div className='img'><img src={data.image}/></div>
        <div className='id'>id:{data.id}</div>
        <div className='title'>title{data.title}</div>
        <div className='price'>price:{data.price}</div>
        <div className='descripion'>descripion{data.price}</div>
        <div className='category'>category:{data.category}</div>
        <div className='Rating'>Rating:{data.rating.rata} by{data.rating.count}</div>
        <div className='buttons'>
          <button className='dec' onClick={()=>props.dec(data.id)}>-</button>{data.qty}
        <button className='inc' onClick={()=>props.inc(data.id)}>+</button>
        </div>
        <button className='delete' onClick={()=>props.del(data.id)}>DelProd</button>
      </div>
      </div>)
    })}
    </div>
  )
}

export default CART