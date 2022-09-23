import React, { useEffect, useState } from 'react';

const Mycomponent = () => {

    let [x, setx] = useState(0)
    let [y, sety] = useState([])
  

    useEffect(() => {
        console.log('useEfect 1')
    }, [])
    useEffect(() => {
        console.log('useEfect 2')
    }, [x])
   
    const handleClick = () => {
        setx(x + 1);  
        console.log('x inside handleclick',x);
}
    const handleClick2 = () => {
        sety( HowMuchDikshWillPayMeAgain.push(500))
    }
    console.log('variables outside handle click', y,HowMuchDikshWillPayMeAgain);
    return (
        <div>
            <p>x is {x}</p> <br />
            <button onClick={handleClick}>click me to increase x</button><br />
            <p>y is {y}</p><br />
            <button onClick={handleClick2}>click me to increase y</button>
        </div>
    );
}

export default Mycomponent;