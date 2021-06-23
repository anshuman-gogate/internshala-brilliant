import React from 'react'

function IntroAbout() {
    return (
        <div className="intro-about">
            <h1 className="intro__title">Logic</h1>
            <h5 className="intro__subtitle">Stretch your analytic muscles with knights, knaves, logic gates, and more!</h5>

            <p className="intro__desc">The beginning of our introductory math journey is Logic. Through these challenging problem solving exercises, you'll construct the critical thinking skills that are the basis for mathematical reasoning.</p>
            <p className="intro__desc">You'll use limited information to make predictions – eliminating the impossible to uncover the truth. This course builds up to some truly mind-bending challenges!<a href="#" className="intro__read-more link"> Read more</a></p>

            <p className="intro__prereq"><a href="#">View prerequisites and next steps</a></p>
        </div>
    )
}

export default IntroAbout
