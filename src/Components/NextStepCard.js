import React from 'react'

function NextStepCard(props) {
    return (
        <div className="next-step-card">
            <div className="next-step__left-col">
                <a href="#" className="next-step__link">
                    <img src={props.src} alt="A course image" className="next-step__img" />
                </a>
            </div>

            <div className="next-step__right-col">
                <h3 className="next-step-card__title">
                    <a href="#" className="next-step__link next-step__link--title">{props.title}</a>
                    <p className="next-step-card__desc"><a href="#" className="next-step__link--desc">{props.desc}</a></p>
                </h3>
            </div>
        </div>
    )
}

export default NextStepCard
