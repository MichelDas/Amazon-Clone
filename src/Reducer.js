export const initialState = {
    basket: [],
}

function reducer(state, action){
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE FROM BASKET':
            return {state}
        default:
            return state;
        
    }
}

export default reducer;