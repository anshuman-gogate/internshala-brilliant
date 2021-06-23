import React, {useState} from 'react'
import Card from './Card'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

function CardHolderSection(props) {
    const allCards = props.cards.map(card => {
       return (<Card handleModal={props.handleModal} lockedSection={props.lockedSection} src={card.src} title={card.title} subtitle={card.subtitle} key={Math.random() * 100000}/>)
    });

    const [styles , setStyles] = useState({flexWrap: "nowrap"});
    const [btnStyle , setBtnStyle] = useState({display: "block"});
    const [collapseBtnStyle , setCollapseBtnStyle] = useState({display: "none"});

    function cardsWrap() {
       setStyles({flexWrap: "wrap"});
       setBtnStyle({display: "none"});
       setCollapseBtnStyle({display: "inline"});
    }

    function cardsUnwrap() {
        setStyles({flexWrap: "nowrap"});
        setBtnStyle({display: "block"});
        setCollapseBtnStyle({display: "none"});
    }

    let button;
    if(props.showToggle === "true") {
        button = 
        <button className="card-holder__toggle-btn" onClick={cardsWrap} style={btnStyle}><ExpandMoreIcon style={{fontSize: "3.5rem"}}/></button>
    }
    else {
        button = null;
    }

    return (
        <section className="card-holder">

            <div className="card-holder__info">
                <div className="number-container">
                    <p className="card-holder__num">{props.number}</p>
                </div>
                <div className="section-details">
                    <h3 className="card-holder__title">{props.title}</h3>
                    <p className="card-holder__subtitle">{props.subtitle} <span className="collapse-btn" style={collapseBtnStyle} onClick={cardsUnwrap}>collapse</span></p>
                </div>
            </div>

            <div className="cards" style={styles}>
                {allCards}
                {/* <button className="card-holder__toggle-btn" onClick={cardsWrap} style={btnStyle}> ^ </button> */}
                {button}
            </div>
        </section>
    )
}

export default CardHolderSection
