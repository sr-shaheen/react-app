import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

class ComponentE extends Component {
    static contextType = UserContext //new 2
    render() {
        return (
            <div>
                Component E Context {this.context}
                <ComponentF />
            </div>
        )
    }
}

// ComponentE.contextType = UserContext //new
export default ComponentE
