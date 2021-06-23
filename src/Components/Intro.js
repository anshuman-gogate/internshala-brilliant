import React from 'react'
import IntroAbout from './IntroAbout'
import IntroCard from './IntroCard'

function Intro(props) {
    return (
        <section className="intro">
            <IntroAbout />
            <IntroCard handleModal={props.handleModal}/>
        </section>
    )
}

export default Intro
