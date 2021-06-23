import React from 'react'
import HttpsSharpIcon from '@material-ui/icons/HttpsSharp';

function Card(props) {
    const lockEle = 
        <div className="locked-container">
            <HttpsSharpIcon style={{color: "white"}}/>
        </div>

    const premMsg = 
    <div className="locked-container-message">
        <p className="locked-message">Included with<br/>Brilliant premium</p>
    </div>

    return (
        <div className="card" onClick={props.handleModal}>
            <div className="card__img-data">
                <img src={props.src} alt="thumbnail image" className="card__img"/>
                {props.lockedSection==="true" ? lockEle : null}
                {props.lockedSection==="true" ? premMsg : null}
            </div>
            <h3 className="card__title">{props.title}</h3>
            <p className="card__subtitle">{props.subtitle}</p>
            <div className="card__progress-bar"></div>
        </div>
    )
}

export default Card
