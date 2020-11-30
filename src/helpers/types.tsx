
export type QuizSchema = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type APIResponse = {
  response_code: number;
  results: QuizSchema[];
};

export type ManageData = {
  onStateChange: Function;
  questions: QuizSchema[];
  setQuestions?: Function
  answers: QuizSchema[];
  setAnswers: Function;
}

export type InitialMenuProps = {
  onStateChange: Function;
  setQuestions: Function;
  setAnswers: Function;
};

export type GameState = "menu" | "play" | "end";