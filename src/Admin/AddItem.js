import { faPray } from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react'
import SideBar from './sidebar'
import {addItem} from '../redux/productsReduce'
import {useDispatch} from 'react-redux'

function AddItem(){
    const [form, setForm] = useState({name:"", img:"", price:""})
    const dispatch  = useDispatch()
    function formChange(e){
        setForm({...form, [e.target.name]: e.target.value})
    }
    function onSubmit(e){
        e.preventDefault();
        dispatch(addItem(form))
        setForm({name:"", img:"", price:""})
    }
    return(
        <>
        <SideBar/>
        <div className="col-md-10">
            <form onSubmit={onSubmit}>
                <div>
                    <label>Titulo do livro: </label>
                    <input onChange={formChange} 
                    name="name"
                    value={form.name}/>
                </div>
                <div>
                    <label>Valor do livro:</label>
                    <input onChange={formChange} 
                    name="price"
                    value={form.price}/>
                </div>
                <div>
                    <label>Imagem do livro</label>
                    <input onChange={formChange} 
                    name="img"
                    value={form.img}/>
                </div>
                
                <button>Adicionar livro</button>
            </form>
        </div>
        </>
    )
}

export default AddItem