import React from 'react'
import Footer from '../footer/Footer'
import Menu from '../menu/menu'
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import './lista.css'
function Lista(){
    const products = useSelector((state)=>state.products)
    const dispatch = useDispatch();
    return(
        <>
        <Menu/>
        <div className="page-listagem container">
        <h2 className="text-center">Listagem de itens</h2>
        {products.map(produto =>(
            <div className="card">
                <Link to={'/item/'+ produto.id}>
                    
                    <img className="img-responsive"
                    src={produto.img}/>
                    <h5>{produto.name}</h5>
                    <p>Valor: R${produto.price}</p>
                    
                
                </Link>
                <button className="addItemCart"
                onClick={() => dispatch({type:'ADD_CART', id:produto.id})}
                >Adicionar no carrinho </button>
                </div>
        ))}   
</div>
        <Footer/>
        </>
    )
}

export default Lista;