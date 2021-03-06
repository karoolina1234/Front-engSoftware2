import products from './products'

const initialState = [
    ...products
]

export default (state=initialState, action) => {
    switch (action.type) {
        case "ADD_CART":
            return state.map(item =>{
                item.id === action.id && item.qtd++
                return item;
            });
        case "REMOVE_CART":
            return state.map(item =>{
                item.id === action.id && item.qtd--
                return item;
            });
        case "CLEAR_CART":
            return state.map(item =>{
                item.qtd = 0;
                return item;
            });
        case "ADD_ITEM":
            return [...state,action.item ];
        case "REMOVE_ITEM":
            return state.filter(item=> item.id !== action.id)
        default:
            return state;}
}

export const addItem = (item) =>{
    return{
        type : "ADD_ITEM",
        item
    }
}
export const removeItem = (id)=>{
    return{
        type: "REMOVE_ITEM",
        id
    }
}