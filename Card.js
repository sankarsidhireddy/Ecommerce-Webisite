import React from 'react'
import "./Card1.css"
import "./App.css"
let Card = (props) => {
    let data=props.data
  return (
    <div className='con'>
        <div className='img'><img src={data.image}/></div>
        <div className='id'>id:{data.id}</div>
        <div className='title'>title{data.title}</div>
        <div className='price'>price:{data.price}</div>
        <div className='descripion'>descripion{data.price}</div>
        <div className='category'>category:{data.category}</div>
        <div className='Rating'>Rating:{data.rating.rata} by{data.rating.count}</div>
        <button className='ADDCart'onClick={()=>props.fun(data)}>ADDCart</button>
        </div>
  )
}

export default Card