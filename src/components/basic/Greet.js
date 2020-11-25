import React from 'react'

// function Greet() {
//     return <h1>Hello Shaheen</h1>
// }

// export default Greet

export const Greet = (props) => {

    return (
        <div>
            <h1>Hello {props.name}</h1>
            {props.children}
        </div>
    )
} 