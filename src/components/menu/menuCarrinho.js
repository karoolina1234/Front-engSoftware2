import React from 'react'
import { Link } from 'react-router-dom'
import './cart.css'
function MenuCarrinho(){
    return(
        <div >
         <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="#">Area do cliente</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <Link to="/cart" className="nav-link">Carrinho</Link>
                </li>
                <li class="nav-item">
                    <Link to="/usuario" class="nav-link" >Minha conta</Link>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    )
}


export default MenuCarrinho;