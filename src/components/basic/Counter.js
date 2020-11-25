import React, { Component } from 'react'

class Count extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    changeCount() {
        // this setState is async , so we use callback as a second paramiter.

        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log('callback value', this.state.count)
        // })

        //prevState is used when we need to works with previous state
        this.setState((prevState, props) => ({
            count: prevState.count + +props.value
        }), () => {
            console.log('callback value', this.state.count)
        })


    }
    changeCountFive() {
        this.changeCount()
        this.changeCount()
        this.changeCount()
        this.changeCount()
        this.changeCount()
    }
    clear() {
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.changeCountFive()}>Count Five</button>
                <button onClick={() => this.clear()}>Clear</button>

            </div>
        )
    }
}

export default Count;