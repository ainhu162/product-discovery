import React from 'react'

export const Layout = (props) => {
    return (
        <div>
            {props.header}
            {props.children}
        </div>
    )
}
