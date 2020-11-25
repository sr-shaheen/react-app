import React, { Component } from 'react'

class UserGreting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        // let message = this.state.isLoggedIn ? "Welcome shaheen" : 'Welcome Guest';

        // return (
        //     <div>{message}</div>
        // )


        return this.state.isLoggedIn && <div>"Welcome Shaheen"</div>
        
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             Welcome Shaheen
        //         </div>
        //     ) 
        // }
        // else{
        //     return (
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }

    }
}

export default UserGreting
