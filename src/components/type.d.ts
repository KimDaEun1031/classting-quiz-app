export interface item {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answer: Array<string>;
  question: string;
  type: string;
}

export interface answerProps {
  selected?: boolean;
  isCorrect?: boolean;
}
