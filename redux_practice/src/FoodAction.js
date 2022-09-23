export const Add_Tomatoe_Default = () => {
    return {
        type: 'Add_tomatoe',
      
    }
}

export const Add_Potatoe_Default = () => {
    return {
        type: 'Add_potatoe',    
    }
}

export const Add_Tomatoe_User = (tomatoes) => {
    return {
        type: 'Add_tomatoe_User',
        payload: tomatoes,
      
    }
}


export const Add_Potatoe_User = (potatoes) => {
    return {
        type: 'Add_Potatoe_User',
        payload:potatoes
    }
}