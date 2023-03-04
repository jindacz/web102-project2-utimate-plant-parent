import React from 'react'
import './Card.css'

const Card = (props) => {
	const {question, answer, showAnswer, onCardClick} = props;
	return (
	  <div className="card" onClick={onCardClick}>
	   <div className='card' onClick={onCardClick}>
			<div className='card-text'>{showAnswer ? answer : question}</div>
	   </div>
	  </div>
	)
  }
  
export default Card;