import React, { Component } from 'react'

class UpdatingLifecycle extends Component {
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

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    changeState = () => {
        this.setState({
            name: 'Codevolution'
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.changeState}>change State</button>
            </div>
        )
    }
}

export default UpdatingLifecycle
