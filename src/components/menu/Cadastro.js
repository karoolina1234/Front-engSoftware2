import React,{useState} from 'react'
import './cart.css'
import {Formik, Form , Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import MenuCarrinho from './menuCarrinho'
import {addUser} from '../../redux/usuarioReducer'
import {useDispatch} from 'react-redux'

// const validations = yup.object().shape({
//     nome:yup.string().required(),
//     email:yup.string().email().required(),
//     cep:yup.string().min(8).required(),
//     cidade:yup.string().required(),
//     numero:yup.string().required(),
//     rua:yup.string().required(),
// })
//function Cadastro  (handleSubmit, initialValues){
function Cadastro  (){
    const [formm, setForm] = useState({nome: '', email:'', cep:'', rua:'' , cidade:'', numero:''})
    const dispatch = useDispatch()
          function formChange(e){
              setForm({...formm, [e.target.name]: e.target.value})
          }  
          function onSubmit(e){
    
                dispatch(addUser(formm))
          }
    return(
        <>
        <MenuCarrinho/>
             {/* <Formik initialValues={initialValues}
             onSubmit={handleSubmit} validationSchema={validations}>
                 {({handleChange, handleBlur, handleSubmit, values})=>( 
                     <Form onsubmit={handleSubmit} className="container cadastroUser">*/}
             <form onSubmit={onSubmit} className="container cadastroUser">
                 <h4 className="text-center mt-2 mb-2">Cadastro de usuario</h4>
                 <div className='form-group'>
                     <label>Informe seu nome:</label>
                     <input
                     type="text"
                     name="nome"
                     id="nome"
                      className="form-control"
                    onChange={formChange}
                    value={formm.name}
                      />
                      {/* <ErrorMessage className="Form-Error" component="span"  name="nome"/> */}
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
                          {/* <ErrorMessage className="Form-Error" component="span"  name="rua"/> */}
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
                         {/* <ErrorMessage className="Form-Error" component="span"  name="bairro"/> */}
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
                         {/* <ErrorMessage className="Form-Error" component="span"  name="cidade"/> */}
                     </div>
                 </div>
                 <button className='cadastrarBtn' type="submit">Enviar informações</button>
 
             </form>
             {/* )}
             </Formik> */}
             </>
    )
}
  
        


export default Cadastro