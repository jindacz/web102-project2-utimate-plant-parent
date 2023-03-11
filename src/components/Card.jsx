import React from "react";
import "./Card.css";

const Card = (props) => {
  const {
    question,
    answer,
    showAnswer,
    onCardClick,
    image,
    category,
    difficulty,
    guess,
    onGuessChange,
    onGuessSubmit,
    feedback,
	// onBack,
	// onNext,
	// isBackDisabled,
	// isNextDisabled
  } = props;

  const getDifficultyColor = () => {
    switch (difficulty) {
      case "Easy":
        return "green";
      case "Medium":
        return "orange";
      case "Hard":
        return "red";
      default:
        return "white";
    }
  };

  const cardStyle = {
    backgroundColor: getDifficultyColor(),
  };

  return (
	<>
    <div className="container">
      <div className="card" style={cardStyle} onClick={onCardClick}>
        <div className="card-content">
          <div className="card-text">{showAnswer ? answer : question}</div>
          {image && <img src={image} alt="card image" className="card-image" />}
        </div>
		{/* <div className="navigation-buttons">
          <button onClick={onBack} disabled={isBackDisabled}>
            Back
          </button>
          <button onClick={onNext} disabled={isNextDisabled}>
            Next
          </button>
        </div> */}
      </div>
  
    </div>
	<div className="inputSubmit">
        {!showAnswer && (
          <form onSubmit={onGuessSubmit}>
            <input type="text" value={guess} onChange={onGuessChange} />
            <button type="submit">Submit</button>
            {feedback && <div>{feedback}</div>}
          </form>
        )}
      </div>
	</>
  );
};

export default Card;
