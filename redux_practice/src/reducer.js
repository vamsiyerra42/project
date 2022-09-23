const initial_state = {
    decrement_cake: 10,
    increment_cake : 20
}

const reducer = (state = initial_state, action) => {
    switch (action.type) {
        case 'buy_cake':
            
            return {
                ...state,
                decrement_cake: state.decrement_cake - action.payload
            }
            break;
        case 'add_cake':
            
            return {
                ...state,
                increment_cake: state.increment_cake + action.payload
            }
            break;
        default: return state
           
    }
}

export default reducer