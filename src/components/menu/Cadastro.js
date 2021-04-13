import React,{useState} from 'react'
import './cart.css'
import MenuCarrinho from './menuCarrinho'
import {addUser} from '../../redux/usuarioReducer'
import {useDispatch} from 'react-redux'

function Cadastro  (){
    const [formm, setForm] = useState({name: '', email:'', cep:'', rua:'' , cidade:'', numero:''})
    const dispatch = useDispatch()
          function formChange(e){
              setForm({...formm, [e.target.name]: e.target.value})
          }  
          function onSubmit(e){
                e.preventDefault();
                dispatch(addUser(formm))
                setForm({name:'', email:'', cep:'', rua:'', cidade:'', numero:''})
          }
    return(
        <>
        <MenuCarrinho/>
             <form onSubmit={onSubmit} className="container cadastroUser">
                 <h4 className="text-center mt-2 mb-2">Cadastro de usuario</h4>
                 <div className='form-group'>
                     <label>Informe seu nome:</label>
                     <input
                     type="text"
                     name="name"
                     id="nome"
                      className="form-control"
                    onChange={formChange}
                    value={formm.name}
                      />
            
                 </div>
 
                 <div className='form-group'>
                     <label>Informe seu e-mail:</label>
                     <input type="email" 
                     name="email"
                     id="email"
                     className="form-control"
                     onChange={formChange}
                     value={formm.email}
                    />
                    {/* <ErrorMessage className="Form-Error" component="span"  name="email"/> */}
                 </div>
                     <h4 className="text-center">dados endereço</h4>
                 <div className='col-md-6'>
                     <div className="form-group">
                         <label>CEP</label>
                         <input className="form-control"
                         name="cep"
                         id="cep"
                         onChange={formChange}
                         value={formm.cep}
                          />
                          {/* <ErrorMessage className="Form-Error" component="span"  name="cep"/> */}
                     </div>
                 </div>
                 <div className='col-md-6'>
                     <div className="form-group">
                         <label>rua</label>
                         <input className="form-control"
                         name="rua"
                         id="rua"
                         onChange={formChange}
                         value={formm.rua}
                          />
                     </div>
                 </div>
                 <div className='col-md-6'>
                     <div className="form-group">
                         <label>numero</label>
                         <input className="form-control"
                         name="numero"
                         id="numero"
                         onChange={formChange}
                         value={formm.numero}
                         />
                        
                     </div>
                 </div>
                 <div className='col-md-6'>
                     <div className="form-group">
                         <label>cidade</label>
                         <input className="form-control"
                         name="cidade"
                         id="cidade"
                         onChange={formChange}
                         value={formm.cidade}/>
                     </div>
                 </div>
                 <button className='cadastrarBtn' type="submit">Enviar informações</button>
 
             </form>
           
             </>
    )
}
  
        


export default Cadastro