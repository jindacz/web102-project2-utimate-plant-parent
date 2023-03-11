import { useState } from "react";

import "./App.css";
import Card from "./components/Card";
import stringSimilarity from "string-similarity";

const cards = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
    image: "http://placekitten.com/200/300",
    category: "Geography",
    difficulty: "Easy",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
    image: "http://placekitten.com/200/300",
    category: "Science",
    difficulty: "Medium",
  },
  {
    question: "What is the smallest country in the world?",
    answer: "Vatican City",
    image: "http://placekitten.com/200/300",
    category: "Geography",
    difficulty: "Hard",
  },
  {
    question: "What is the highest mountain in the world?",
    answer: "Mount Everest",
    image: "http://placekitten.com/200/300",
    category: "Geography",
    difficulty: "Medium",
  },
  {
    question: "What is the largest desert in the world?",
    answer: "Sahara",
    image: "http://placekitten.com/200/300",
    category: "Geography",
    difficulty: "Easy",
  },
  {
    question: "What is the largest desert in the world?",
    answer: "Sahara",
    image: "http://placekitten.com/200/300",
    category: "Geography",
    difficulty: "Easy",
  },
];

const App = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [shuffledCards, setShuffledCards] = useState([...cards]);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [masteredCards, setMasteredCards] = useState([]);

  const currentCard = cards[currentCardIndex];

  const handleNextCard = () => {
    setShowAnswer(false);
    setGuess("");
    setFeedback(null);
    setCurrentCardIndex(currentCardIndex + 1);
  };

  const handleBackCard = () => {
    setShowAnswer(false);
    setGuess("");
    setFeedback(null);
    setCurrentCardIndex(currentCardIndex - 1);
  };

  const handleShuffleCards = () => {
    setShuffledCards([...cards].sort(() => Math.random() - 0.5));
    setCurrentCardIndex(0);
  };

  const handleCardMastered = () => {
    // 将当前卡片添加到 masteredCards 列表中
    setMasteredCards([...masteredCards, currentCard]);
    
    // 将当前卡片从 cards 列表中删除
    const newCards = cards.filter(card => card !== currentCard);
    setCards(newCards);
  
    // 自动跳转到下一张卡片
    handleNextCard();
  };



  const isBackDisabled = currentCardIndex === 0;
  const isNextDisabled = currentCardIndex === cards.length - 1;

  const handleGuessSubmit = (e) => {
    e.preventDefault();

    const similarityScore = stringSimilarity.compareTwoStrings(
      guess.toLowerCase(),
      currentCard.answer.toLowerCase()
    )

    if (similarityScore >= 0.6) {
      setFeedback("Correct!");
      setCurrentStreak(currentStreak + 1);
      if (currentStreak + 1 > longestStreak) {
        setLongestStreak(currentStreak + 1);
      }
    } else {
      setFeedback("Incorrect.");
      setCurrentStreak(0);
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h1>The Ultimate Plant Parent!</h1>
        <h3>
          How good of a plant parent are you? Test all of your planty knowledge
          here!
        </h3>
        <h3>Number of cards: {cards.length}</h3>

        <Card
          question={currentCard.question}
          answer={currentCard.answer}
          image={currentCard.image}
          category={currentCard.category}
          difficulty={currentCard.difficulty}
          showAnswer={showAnswer}
          onCardClick={() => setShowAnswer(true)}
          guess={guess}
          onGuessChange={(e) => setGuess(e.target.value)}
          onGuessSubmit={handleGuessSubmit}
          feedback={feedback}
        />
         <div>
          Current Streak: {currentStreak}
        </div>
        <div>
          Longest Streak: {longestStreak}
        </div>


        <button onClick={handleBackCard} disabled={isBackDisabled}>
          Back
        </button>
        <button onClick={handleNextCard} disabled={isNextDisabled}>
          Next
        </button>
        <button onClick={handleShuffleCards}>Shuffle</button>
        <button onClick={handleCardMastered}>Mark as Mastered</button>
      </div>
    </div>
  );
};

export default App;
