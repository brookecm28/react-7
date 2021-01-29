import React, {useState} from 'react'

const Counter = props => {


//Declarea  state value (counter) and a function to affect it(setcounter); the 0 here is the initial value of the state value (so, counter: 0)
const [counter, setCounter] = useState(0) //using array destructuring here

    return (
    <div>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter +1)}>CLICK ME!</button>
    </div>)
}

export default Counter