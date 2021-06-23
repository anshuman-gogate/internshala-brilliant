import React from 'react'

function LogSin(props) {
    return (
        <div className="login-signup">
            <button className="btn btn--login" onClick={props.handleModal}>Log in</button>
            <button className="btn btn--sign-up" onClick={props.handleModal}>sign up</button>
        </div>
    )
}

export default LogSin
