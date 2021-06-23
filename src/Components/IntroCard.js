import React from 'react'

function IntroCard(props) {
    return (
        <div className="intro__card">
            <img src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png" alt="" className="intro-card__img" />

            <div className="card-values-container">
                <div className="card-value">
                    <p className="card-value__num">37</p>
                    <p className="card-value__title">Interactive quizzes</p>
                </div>

                <div className="card-value">
                    <p className="card-value__num">265+</p>
                    <p className="card-value__title">Concepts and exercises</p>
                </div>
            </div>

            <button className="start-course-btn" onClick={props.handleModal}>Start Course</button>
        </div>
    )
}

export default IntroCard
