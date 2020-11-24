import React, { Component } from 'react'

class MountingLifecycle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Shaheen'
        }

        console.log('constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount');
    }
    render() {
        console.log('Render');
        return (
            <div>

            </div>
        )
    }
}

export default MountingLifecycle
