import React, { useState } from 'react'

const FuncHooks = () => {
    //Declare multiple state variables!
    const [fruit, setFruit] = useState('banana');
    const [age, setAge] = useState(23);

    return (
        <React.Fragment>
            <p>Your age is {age}, like fruit {fruit}</p>
            <button 
                onClick={() => {
                    setAge(age + 1)
                    setFruit('Strawberry')
                }}
            >
                Click me!
            </button>
        </React.Fragment>
    )
}

export default FuncHooks;