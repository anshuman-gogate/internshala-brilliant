import React from 'react'

function PrevPage(props) {
    return (
        <p className="prev-page">
            <a href={props.href} className="prev__link">{props.name}</a>
        </p>
    )
}

export default PrevPage
