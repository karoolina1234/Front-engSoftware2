import React from 'react'
import {useSelector} from 'react-redux'
import SideBar from './sidebar';
import './index.css'

function List(){
    const products = useSelector((state)=>state.products)
    return(
        <>
        <SideBar/>
        <div className='col-md-10'>
            <h4>Listagem de produtos cadastrados no sistema</h4>
             {products.map(produto =>(
            <div className="produto">
                    <img className="img-responsive"
                    src={produto.img}/>
                    <h5>{produto.name}</h5>
                    <p>Valor: R${produto.price}</p>
                    
                </div>
        ))}   
        </div> 
            </>
    )
}
export default List;