import React, {useState} from 'react'
import Header from './Components/Header'
import Intro from './Components/Intro'
import PrevPage from './Components/PrevPage'
import NextSteps from './Components/NextSteps'
import CardHolderSection from './Components/CardHolderSection'
import Overlay from './Components/Overlay'

const data = [
  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png",
    title: "Warmup Puzzles",
    subtitle: "Get started with some logic warmups."
  },

  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Truth-Seeking-c83EPA.png",
    title: "Truth-Seeking",
    subtitle: "Who or what is telling the truth?"
  },

  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Machine_Logic_and_Strategy-jrTuIK-2FIeRk.png",
    title: "Strategic Deductions",
    subtitle: "Stretch the information you're given as far as it can go!"
  }
]

const rationalDetective = [
  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Riddles_of_Order-uVO6uP.png",
    title: "Riddles of Order",
    subtitle: "What order do these racers finish in?"
  } ,

  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Crafty_Counting-MyeNyB.png",
    title: "Crafty Counting",
    subtitle: "Learn strategies for counting that go far beyond just counting."
  } ,

  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Mystery_Containers-jce39Z.png",
    title: "Mystery Containers",
    subtitle: "What's in each of these mystery boxes?"
  } ,

  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Futoshiki-bNVmO9.png",
    title: "Futoshiki",
    subtitle: "Arrange the numbers to match the inequalities."
  } ,

  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Shuffles-GgH8Ox.png",
    title: "Shuffles",
    subtitle: "Where did everything get shuffled to?"
  } ,

  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/False_Information-WRykiD.png",
    title: "False Information",
    subtitle: "Solve problems where the people giving you hints might be lying."
  }
]

const puzzles = [
  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Werewolves-Jd2lIq.png",
    title: "Werewolves",
    subtitle: "Who's a werewolf?"
  },

  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Logical_Language-6tn9sJ.png",
    title: "Logical Language",
    subtitle: "Explore the logical use of the words 'and;, 'or', and 'not'."
  },

  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/If_A_then_B.-vl28Kf.png",
    title: "If A, then B.",
    subtitle: "If you do this quiz, you will learn about sentences like this one."
  },

  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Elimination_Grids-bpMmxt.png",
    title: "Elimination Grids",
    subtitle: "Solve classic logic elimination puzzles."
  },

  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Jigsaw_Map-qFUgaS.png",
    title: "Jigsaw Map",
    subtitle: "Where do the pieces go on the map?"
  }
]

const multiLevelThinking = [
  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Perfect_Information-mqTyGs.png",
    title: "Perfect Information",
    subtitle: "If everyone follows the same logic, can you find out what they know?"
  },

  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Hat_Colors-5jioSi.png",
    title: "Hat Colors",
    subtitle: "Can you figure out who can figure out the color of their hat?"
  },

  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Hat_Colors_with_More_People-96NuCs.png",
    title: "Hat Colors with More People",
    subtitle: "What happens to hat puzzles when there are more hats and more people?"
  },

  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Red-Eyed_Dragons-v4T9FK.png",
    title: "Red-Eyed Dragons",
    subtitle: "Exactly how much can you learn from no one knowing anything?"
  },

  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Logical_Pirates-mMDacg.png",
    title: "Logical Pirates",
    subtitle: "Beware! Every pirate is as logical, greedy, and cutthroat as every other pirate."
  },

  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Knights_and_Knaves-vNOTMQ.png",
    title: "Knights and Knaves",
    subtitle: "Solve classic truthteller-liar puzzles where someone else knows the answer."
  }
]

const competetiveGames = [
  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Poisoned_Chocolate-2hzzdS.png",
    title: "Poisoned Chocolate",
    subtitle: "Don't take the last chocolate!"
  },

  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Luk_Tsut_Ki-YkvdnC.png",
    title: "Luk Tsut K'i",
    subtitle: "Find the complete solution to a classic game."
  },

  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Puppies_and_Kittens-MyD5W8.png",
    title: "Puppies and Kittens",
    subtitle: "Solve a fuzzier, livelier variant of the poisoned chocolate game."
  },

  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Poisoned_Chocolate_II-jCwMSc.png",
    title: "Poisoned Chocolate II",
    subtitle: "What happens when the chocolate comes in rectangles?"
  },

  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Game_Search_Algorithms-8CTK46.png",
    title: "Game Search Algorithms",
    subtitle: "Learn how simple AI systems approach game strategy."
  }
]

const logicMachines = [
  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Truth_Tables-fQehm6.png",
    title: "Truth Tables",
    subtitle: "Diagram out the meanings of each logical operator."
  },

  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Basic_Logic_Gates-SuCIgu.png",
    title: "Basic Logic Gates",
    subtitle: "How do AND, OR, and NOT gates work?"
  },

  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Combinations-wp6DqR.png",
    title: "Combinations",
    subtitle: "Combine gates together to make complex circuits."
  },

  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Fredkin_Gates-B8FBqg.png",
    title: "Fredkin Gates",
    subtitle: "Take a peek at a gate used in biological and quantum computing."
  },

  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Binary_Numbers_and_Addition-bJFOa8.png",
    title: "Binary Numbers and Addition",
    subtitle: "How does computer arithmetic work?"
  },

  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Creating_a_Mechanical_Adder-yTzxMV.png",
    title: "Creating a Mechanical Adder",
    subtitle: "Use what you've learned about logic gates to create a circuit that adds numbers."
  }
]

const advKnightKnaves = [
  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Indirection-PZKKoF.png",
    title: "Indirection",
    subtitle: "Can you trick a liar into telling you the truth?"
  },

  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Knights_and_Knaves_En_Masse-7DRnSV.png",
    title: "Knights and Knaves En Masse",
    subtitle: "What happens when you try to do logic at a big island party?"
  },

  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Jokers-wSQW6c.png",
    title: "Jokers",
    subtitle: "Solve tricky variants of knights and knaves puzzles where some residents can behave like either."
  },

  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Oher_Variations-PnIvJz.png",
    title: "Other Variations",
    subtitle: "Twist your mind around these unusual variants."
  },

  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Humans_and_Vampires-zhcWOo.png",
    title: "Humans and Vampires",
    subtitle: "Now there are four types of island resident: can you still work out the truth?"
  },

  {
    src: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Challenges-o42cgt.png",
    title: "Challenges",
    subtitle: "Challenge yourself with our hardest selection of logic puzzles."
  }
]

function App() {
  const [modalDisplay , setModalDisplay] = useState("none");
  function handleModal() {
    setModalDisplay("block");
    document.body.style.overflow = "hidden"
  }

  return (
    <div className="container">
      <Overlay modalDisplayVal={modalDisplay} setModalDisplay={setModalDisplay}/>
      <Header handleModal={handleModal}/>
      <PrevPage href="https://brilliant.org/courses/" name="< Back to all courses"/>
      <Intro handleModal={handleModal}/>
      <CardHolderSection 
        cards={data} 
        number="1" 
        title="Introduction" 
        subtitle="Put your logic to the test with these warmups!"
        handleModal={handleModal}
        showToggle="false"
        lockedSection="false"
      />
      <CardHolderSection 
        cards={rationalDetective} 
        number="2" 
        title="The Rational Detective" 
        subtitle="Eliminate the impossible and uncover the truth!"
        handleModal={handleModal}
        showToggle="true"
        lockedSection="true"
      />
      <CardHolderSection 
        cards={puzzles} 
        number="3" 
        title="Puzzles and Riddles" 
        subtitle="Even trickier puzzles and the tools you need to solve them."
        handleModal={handleModal}
        showToggle="true"
        lockedSection="true"
      />
      <CardHolderSection 
        cards={multiLevelThinking} 
        number="4" 
        title="Multi-Level Thinking" 
        subtitle="If you know that I know that you know... what then?"
        handleModal={handleModal}
        showToggle="true"
        lockedSection="true"
      />
      <CardHolderSection 
        cards={competetiveGames} 
        number="5" 
        title="Competitive Games" 
        subtitle="What will your opponent do? Logic it out!"
        handleModal={handleModal}
        showToggle="true"
        lockedSection="true"
      />
      <CardHolderSection 
        cards={logicMachines} 
        number="6" 
        title="Logic Machines" 
        subtitle="Turn logic into arithmetic machines."
        handleModal={handleModal}
        showToggle="true"
        lockedSection="true"
      />
      <CardHolderSection 
        cards={advKnightKnaves} 
        number="7" 
        title="Advanced Knights and Knaves" 
        subtitle="Uncover liars on this island of logic!"
        handleModal={handleModal}
        showToggle="true"
        lockedSection="true"
      />
      <NextSteps />
    </div>
  )
}

export default App

// <span data-v-38ae8f0d="" data-v-bdcef2d6="" class="brioche-bg" style="background-image: url(&quot;https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png?width=280&quot;);"></span>