import React, { useState } from 'react';
import ListarProdutos from './listar-produtos';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import './item.css'
function Produtos(props) {

  
  return (
      
      <div className="container">
      <ListarProdutos/>
      </div>

  );
}

export default Produtos;
