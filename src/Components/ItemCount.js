import React from 'react'
import { useState,useEffect } from 'react'

const ItemCount = ({stock=5, initial = 1, onAdd}) => {


const[contador,setContador] = useState(initial);

const[confirmed,setConfirmed] = useState(false);

useEffect(()=>{


})

const sumar =() => {
    if(contador < stock){
    setContador (contador + 1)
}
}

const restar =() => {
    if(contador > initial){
        setContador (contador - 1)
}
}

const confirmar =() => {
    if(contador < stock){
      setConfirmed(!confirmed)
      
    }
}

  return (
   <div>
    <p id ="contador">{contador}</p>
        <button onClick={sumar}>sumar</button>
        <button onClick={confirmar}>confirmar</button>
        <button onClick={restar}>restar</button>
   </div>
  )
}

export default ItemCount