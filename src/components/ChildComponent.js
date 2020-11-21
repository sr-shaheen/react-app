import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={()=>props.greetHandler('child')}>Greeting</button>
        </div>
    )
}

export default ChildComponent
