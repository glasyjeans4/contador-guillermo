import React from "react";

import CartWidget from "./CartWidget";

function NavBar(){
    return (
       
        <header id="navbar">
            <h1 className ="titulo" >Titulo tienda </h1>
          <div id="links">
                <a id="li" href = "#"> Home </a>
                <a id="li" href = "#"> Contact </a>
                <a id="li" href = "#"> offers </a>
                <a id="li" href = "#"> log in </a>
          </div>
          <CartWidget/>  
            <h2>Las ofertas de la semana</h2>   
           
        </header>
        )
     
}
export default NavBar;