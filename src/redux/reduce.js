import {combineReducers} from 'redux'
import products from './productsReduce'
import usuarios from  './usuarioReducer'
export default combineReducers({
    products,
    usuarios,
})