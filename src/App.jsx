import { useState } from "react";

import './App.css';
import samosaPic from "./assets/samosa.jpeg"
import Card from "./components/Card";

const App = () => {
  const cards = [
    { question: 'What is the capital of France?', answer: 'Paris' },
    { question: 'What is the largest mammal in the world?', answer: 'Blue whale' },
    { question: 'What is the smallest country in the world?', answer: 'Vatican City' },
    { question: 'What is the highest mountain in the world?', answer: 'Mount Everest' },
    { question: 'What is the largest desert in the world?', answer: 'Sahara' },
    { question: 'What is the capital of France?', answer: 'Paris' },
    { question: 'What is the largest mammal in the world?', answer: 'Blue whale' },
    { question: 'What is the smallest country in the world?', answer: 'Vatican City' },
    { question: 'What is the highest mountain in the world?', answer: 'Mount Everest' },
    { question: 'What is the largest desert in the world?', answer: 'Sahara' },
  ]
  const count = cards.length;
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentCard = cards[currentCardIndex];


  const handleNextCard = () => {
    setShowAnswer(false);
    setCurrentCardIndex(Math.floor(Math.random()* cards.length));
  }

  return (
    <div className="App">
      <div className="header">
          <h1>The Ultimate Plant Parent!</h1>
          <h3>How good of a plant parent are you? Test all of your planty knowledge here!</h3>
          <h3>Number of cards: {count}</h3>

          <Card
            question={currentCard.question}
            answer={currentCard.answer}
            showAnswer={showAnswer}
            onCardClick={() => setShowAnswer(true)}/>
          <button onClick={handleNextCard}>Next</button>
      </div>
    </div>
  )
}

export default App