import React from 'react'
import './myStyle.css'
function StyleSheet(props) {
    let className = props.primary ? 'primary' : '';
    return (
        <div>
            <p className={`${className} font-xl`}>StyleSheet</p>
        </div>
    )
}

export default StyleSheet
