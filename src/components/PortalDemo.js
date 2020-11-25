// react portal is used when we have to create a componet outside of root div element so that we can mange any design independently.its basically use for pop up.

import React from 'react'

import ReactDOM from 'react-dom'
function PortalDemo() {
    return ReactDOM.createPortal(
        <h1>
            Portals Demo
        </h1>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo


