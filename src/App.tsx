import React from "react";

import Menu from "./components/Menu"
import GameScreen from "./components/GameScreen"
import ReplayMenu from "./components/ReplayMenu"

import { QuizSchema, GameState } from "./helpers/types"
import { getNewQuestions } from "./helpers/API"

import "./App.scss";

function App() {
  const [state, setState] = React.useState<GameState>("menu");
  const [questions, setQuestions] = React.useState<QuizSchema[]>([]);
  const [answers, setAnswers] = React.useState<QuizSchema[]>([]);

  React.useEffect(() => {
    getNewQuestions().then(response  => {
      setQuestions(response.questions);
      setAnswers([]);
    });    
  }, []);

  if (state === "menu") {
    return (
      <Menu onStateChange={setState}/>
    );
  }

  else if (state === "play") {
    return (
        <GameScreen
          onStateChange={setState}
          questions={questions}
          answers={answers}
          setAnswers={setAnswers}
        ></GameScreen>
    );
  }

  else if (state === "end") {
    return (
      <ReplayMenu
        onStateChange={setState}
        questions={questions}
        setQuestions={setQuestions}
        answers={answers}
        setAnswers={setAnswers}
      ></ReplayMenu>
    );
  }
  else {
    return <div></div>
  }
}

export default App;