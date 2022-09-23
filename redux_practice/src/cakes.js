import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { add_cake } from './action'
import { Add_Potatoe_Default, Add_Tomatoe_User } from './FoodAction';
const Cakes = (props) => {
    const myState = useSelector((state) => state)
    console.log(myState);
   const dispatch = useDispatch()
    return <div>
        <label>the number of Tomatoes for buy
         {myState.tomatoes}
        </label> <br/>
        <label>the number of Potatoes for adding
        {myState.potatoes}
        </label>
        <br/>
        <button > buy Tomatoe </button>
        <button onClick={()=>dispatch(Add_Potatoe_Default())} > buy potaote </button>
        <label>Add custom Potatoe </label>
        <input />
        <label>Add custom tomatoe </label>
        <input onChange={(e)=>dispatch(Add_Tomatoe_User(Number(e.target.value)))}/>
        <button> add cake </button>
    </div>
}




export default Cakes
