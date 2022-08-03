import React from "react"
import ItemCount from "./ItemCount"
const ItemListContainer = (props) => {

    return (
    <div id ="card">
        <p id="contcard">{props.tit}</p>
        <ItemCount/>
    </div>
  )
}

export default ItemListContainer
