import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (data) => {
                        return <div> Component F Context {data}</div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentF
