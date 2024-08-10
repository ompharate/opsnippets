import * as React from 'react'
import { UseCounter } from '../hooks/counter'

const Increment = () => {
    const { increment} = UseCounter();
    return (
        <button onClick={increment}>Increment</button>
    )
}


const Decrement = () => {
    const { decrement} = UseCounter();
    return (
        <button onClick={decrement}>Decrement</button>
    )
}

export { Decrement, Increment }