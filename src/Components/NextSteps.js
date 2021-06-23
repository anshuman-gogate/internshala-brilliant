import React from 'react'
import NextStepCard from './NextStepCard'

function NextSteps() {
    return (
        <div className="next-steps-container">
            <h5 className="next-steps__title">NEXT STEPS</h5>
            <div className="next-steps">
                <NextStepCard 
                    src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/math_fundamentals-KD5NF3.png" 
                    title="Mathematical Fundamentals" 
                    desc="The essential tools for mastering algebra, logic, and number theory!"
                />

                <NextStepCard 
                    src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/cs_fundamentals-B2P79W.png" 
                    title="Computer Science Fundamentals" 
                    desc="Wrap your mind around computational thinking, from everyday tasks to algorithms."
                />
            </div>
        </div>
    )
}

export default NextSteps

// <span data-v-38ae8f0d="" data-v-39bad630="" class="brioche-bg" style="background-image: url(&quot;https://ds055uzetaobb.cloudfront.net/brioche/chapter/math_fundamentals-KD5NF3.png?width=92&quot;);"></span>
// <span class="brioche-bg" style="background-image: url(&quot;https://ds055uzetaobb.cloudfront.net/brioche/chapter/cs_fundamentals-B2P79W.png?width=92&quot;);" data-v-38ae8f0d="" data-v-39bad630=""></span>
