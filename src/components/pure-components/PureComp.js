import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {

        // pure component only rerenderd when the element value will changed. its a shallow comparison on the props and state of the component. Its helpfull for unnessary rendaring components. its only use chass components.
        return (
            <div>
                Pure Component
            </div>
        )
    }
}

export default PureComp
