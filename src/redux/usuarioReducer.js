import usuarios from './usuarios'

const initialState = [
    ...usuarios
]

export default (state=initialState, action) => {
    switch(action.type){
        case "ADD_USER":
            return[...state, action.usuario];
        default:
            return state;
    }
}

export const addUser = (usuario) =>{
    return{
        type: 'ADD_USER',
        usuario
    }
}


