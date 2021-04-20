import React from 'react'

let Second = (props) => {
    return (
        <>
            <div>
                <strong>{props.title}</strong>
            </div>
            <div>
                {props.content}
            </div>
        </>
    )
}

export default Second;