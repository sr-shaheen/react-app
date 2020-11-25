import React from 'react'

function MemoComp({name}) {
    // this is same as pure component. Only diffrence is it is only use for functional component.
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp) // here is the changes
