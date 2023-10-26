export type SanityQuestion = {
  id: string;
  title: string;
  type: string;
  choices: QuestionChoice[];
  matchChoices: MatchQuestionChoice[];
};

export type QuestionChoice = {
  title: string;
  value: string;
  isCorrect: boolean;
};

export type MatchQuestionChoice = {
  title: string;
  value: string;
  matchTitle: string;
  matchValue: string;
};

export type Answer = {
  id: string;
  values: AnswerChoice[];
};

export type AnswerChoice = {
  id: string;
  value: string;
};

export enum QuizState {
  Intro = 0,
  Started = 1,
  Submit = 2,
  Scoring = 3,
  Summary = 4,
}

export enum QuizResult {
  Fail = 0,
  Almost = 1,
  Pass = 2,
  Perfect = 3,
}
