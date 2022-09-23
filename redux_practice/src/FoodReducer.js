const vegetableState = {
    tomatoes: 50,
    potatoes: 20,
    spinach:80
}

const foodReducer = (state = vegetableState, action) => {
    switch (action.type) {
        case 'Add_tomatoe':  
            return {
                ...state,
                tomatoes: state.tomatoes +5
            }
            break;
        case 'Add_potatoe':
            
            return {
                ...state,
                potatoes: state.potatoes +5
            }
            break;
            case 'Add_tomatoe_User':
                 
                return {
                    ...state,
                    tomatoes: state.tomatoes +action.payload
                }
            
            break;
            case 'Add_Potatoe_User':
            
                return {
                    ...state,
                    potatoes: state.potatoes +action.payload
                }
        default: return state
           
    }
}

export default foodReducer

