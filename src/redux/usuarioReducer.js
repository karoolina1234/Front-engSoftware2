import usuarios from './usuarios'

const initialState = [
    ...usuarios
]

export default (state=initialState, action) => {
    if(action.type === 'ADD_USER'){
        return[...state, action.usuarios]
    }
    return state;
}

export const addUser = (usuarios) =>{
    return{
        type: 'ADD_USER',
        usuarios
    }
}


