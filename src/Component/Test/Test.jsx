import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Test = () => {
    const [count, setCount] = useState(0)
    // const minus = () =>{
    //     setCount(count - 1)
    // }
    // const plus = () =>{
    //     setCount(count + 1)
    // }
  return (
    <div>
        <h1>{count}</h1>
        <Button variant="primary" onClick={() => setCount(count + 1) }>+</Button>
        <Button variant="warning" onClick={() => setCount(count - 1)}>-</Button>
    </div>
  )
}

export default Test