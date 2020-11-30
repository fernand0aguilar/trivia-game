import React from "react";

import Menu from "./containers/Menu"
import GameScreen from "./containers/GameScreen"
import ReplayMenu from "./containers/ReplayMenu"

import Footer from "./components/Footer"

import { QuizSchema, GameState } from "./helpers/types"
import { getNewQuestions } from "./helpers/API"

import "./App.scss";

function App() {
  const [state, setState] = React.useState<GameState>("menu");
  const [questions, setQuestions] = React.useState<QuizSchema[]>([]);
  const [answers, setAnswers] = React.useState<QuizSchema[]>([]);

  React.useEffect(() => {
    getNewQuestions().then(response => {
      setQuestions(response.questions);
      setAnswers([]);
    });
  }, []);

  let currentStateContainer = null;

  if (state === "menu") {
    currentStateContainer = <Menu onStateChange={setState} />
  }

  else if (state === "play") {
    currentStateContainer = (
      <GameScreen
        onStateChange={setState}
        questions={questions}
        answers={answers}
        setAnswers={setAnswers}
      ></GameScreen>
    );
  }

  else if (state === "end") {
    currentStateContainer = (
      <ReplayMenu
        onStateChange={setState}
        questions={questions}
        setQuestions={setQuestions}
        answers={answers}
        setAnswers={setAnswers}
      ></ReplayMenu>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        {currentStateContainer}
      </header>      
      <Footer></Footer>
    </div>
  )
}

export default App;