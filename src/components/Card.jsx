import React from 'react'
import './Card.css'

const Card = (props) => {
	const {question, answer, showAnswer, onCardClick, image, category, difficulty} = props;

	const getDifficultyColor = () => {
		switch (difficulty) {
			case 'Easy':
				return 'green';
			case 'Medium':
				return 'orange';
			case 'Hard':
				return 'red'
			default:
				return 'white'
		}
	}

	const cardStyle = {
		backgroundColor: getDifficultyColor()
	}

 	return (
	  <div className='container'>
	   <div className='card' onClick={onCardClick} style={cardStyle}>
			<div className='card-content'>
				
				<div className='card-text'>{showAnswer ? answer : question}</div>
				{image && <img src={image} alt="card image" className="card-image"/>}
			</div>
	   </div>
	  </div>
	)
  }
  
export default Card;