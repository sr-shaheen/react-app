import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {
    constructor(props) {
        super(props)

        this.componetRef = React.createRef()
    }

    clickHandler = () => {
        this.componetRef.current.focusInput()
    }
    render() {
        return (
            <div>
                <Input ref={this.componetRef} />
                <button onClick={this.clickHandler}>Focus Button</button>
            </div>
        )
    }
}

export default FocusInput
