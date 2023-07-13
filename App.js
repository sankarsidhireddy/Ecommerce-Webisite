import { useState,useEffect,useRef} from "react";
import axios from "axios";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import NAV from "./NAV";
import Card from "./Card";
import "./App.css"
import CART from "./CART";


let App=()=>{
  let [data,setData]=useState([])
  let [cart,setCart]=useState([])
  let [res,setRes]=useState([])
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((res)=>{
      setData(res.data)
      
      
    })
  },[])
  let inc=(id)=>{
    let obj=cart.map((item)=>{
      if(item.id==id){
        item.qty=item.qty+1
      }
      return item
    })
    setCart(obj)
  }
  let dec=(id)=>{
    let obj=cart.map((item)=>{
      if(item.id==id &&item.qty>1){
        item.qty=item.qty-1
      }
      return item
    })
    setCart(obj)
  }
  let del=(id)=>{
    let obj=cart.filter((item)=>item.id!=id)
    setCart(obj)
  }
  let upd=(info)=>{
    let obj=cart.filter((item)=>item.id==info.id)
    if(obj.length==0){
      setCart([...cart,{...info,"qty":1}])
    }
  }
  return(
    <div>
       <BrowserRouter>
       <NAV/>
       <Routes>
         <Route path="/" element={
          <div className="cartcon">
            {
              data.map((item,index)=><Card  data={item} fun={upd} key={index}/>)
            }
          </div>
          }>HOME</Route>

         <Route path="/cart" element={<CART data={cart} inc={inc} dec={dec} del={del}/>}>CART</Route>
        </Routes>
         </BrowserRouter>
         
    </div>
  )
}
export default App;