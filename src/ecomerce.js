import React,{useState} from 'react';
import './ecomerce.css';
import Menu from './components/menu/menu';
import Produtos from './components/produtos/produtos';
import ItensCarrinhoMenu from './components/menu/carrinho'
import { Provider} from 'react-redux'
import store from '../src/redux/store'
import Footer from './components/footer/Footer'

function Ecomerce() {
 
  return (
  <Provider store={store}>
    <>
    <Menu/>
    <Produtos/>
    <Footer/>
    </>
  </Provider>
   
   
  );
}

export default Ecomerce;
