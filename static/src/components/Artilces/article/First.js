import React from 'react'

let First = (props) => {
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

export default First;