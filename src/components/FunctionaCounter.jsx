import { useState } from "react"

function FunctionalComponent(){
    const [counter,setCounter] = useState(0) 
    const [name,setName] = useState('Gasangwa') 

    const increment = () =>{
        setCounter(counter + 1)
    }
    const decrement = () =>{
        setCounter(counter - 1)
    }

    // const naming = () =>{
    //     setName(name + 'How are you')
    // }
    return <div>
        <div>Counter value: {counter}</div>
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>

    </div>
}


export default FunctionalComponent