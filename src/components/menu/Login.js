import React from 'react'
import MenuCarrinho from './menuCarrinho'
import './login.css'
import {Link} from 'react-router-dom'
function Login(){
    return(
        <>
        <MenuCarrinho/>
       <div>
          <div className="login">
              <form>
                  <h5>Entre em sua Conta</h5>
                  <input placeholder="Informe seu e-mail"/>
                  <input placeholder="Informe sua senha"/>
                  <button className="login-button">Logar</button>
                  <div className="links">
                    <a className="e-senha">Esqueci a senha</a>
                    <Link to="/cadastro" className="cadastro">Cadastre-se</Link>
                  </div>
              </form>
          </div>

       </div>
        </>
    )
}
export default Login