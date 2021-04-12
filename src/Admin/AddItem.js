import { faPray } from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react'
import SideBar from './sidebar'
import {addItem} from '../redux/productsReduce'
import {useDispatch} from 'react-redux'
import './index.css'

function AddItem(){
    const [form, setForm] = useState({name:"", img:"", price:""}) //Estado 
    const dispatch  = useDispatch()
    function formChange(e){
        setForm({...form, [e.target.name]: e.target.value}) //pega os valores digitados
    }
    function onSubmit(e){
        e.preventDefault();
        dispatch(addItem(form)) //adiciona usando o redux 
        setForm({name:"", img:"", price:""}) //limpa os dados
    }
    return(
        <>
        <SideBar/>
        <div className="col-md-10">
            <h4>Adicione um novo livro</h4>
            <form onSubmit={onSubmit}>
                <div className="form-group col-md-6" id="fmc">
                    <label className="label-formulario">Titulo do livro: </label>
                    <input onChange={formChange} 
                    name="name"
                    value={form.name}/>
                </div>
                <div className="form-group col-md-6">
                    <label>Valor do livro:</label>
                    <input onChange={formChange} 
                    name="price"
                    value={form.price}/>
                </div>
                <div className="form-group">
                    <label>Imagem do livro</label>
                    <input onChange={formChange} 
                    name="img"
                    value={form.img}/>
                </div>
                
                <button className="addItemMenu">Adicionar livro</button>
            </form>
        </div>
        </>
    )
}

export default AddItem