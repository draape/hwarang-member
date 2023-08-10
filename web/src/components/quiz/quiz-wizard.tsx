import React, { FC, useState, useRef } from "react";
import { Button } from "../button/button";
import { Question } from "./question";

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

type QuizProps = {
  title: string;
  description: string;
  questions: SanityQuestion[];
};

enum QuizState {
  Intro = 0,
  Started = 1,
  Summary = 2,
}

enum QuizResult {
  Fail = 0,
  Almost = 1,
  Pass = 2,
  Perfect = 3,
}

type QuizModel = {
  result?: QuizResult;
  score?: number;
  values?: [{ key: string; value: string }];
};

export const QuizWizard: FC<QuizProps> = ({
  title,
  description,
  questions,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [state, setState] = useState<QuizState>(QuizState.Intro);
  const [context, setContext] = useState<QuizModel>();
  const formRef = useRef(null);

  const handleSubmit = (event) => {};

  const startQuiz = () => {
    setState(QuizState.Started);
  };

  const previous = () => {
    if (currentStep === 0) {
      setState(QuizState.Intro);
      return;
    }
    setCurrentStep(currentStep - 1);
  };

  const next = () => {
    if (currentStep === questions.length - 1) {
      // score and save, needs to get the progress (how many points earned = MAX(current result - previous result, 0))
      setContext({ score: 50, result: QuizResult.Almost });
      setState(QuizState.Summary);
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <h1>{title}</h1>
      {/* Extract each step as a component */}
      {state === QuizState.Intro && (
        <>
          <p>{description}</p>
          <Button onClick={startQuiz} type="button">
            Start
          </Button>
        </>
      )}
      {state === QuizState.Started && (
        <>
          {questions.map((question, idx) => (
            <Question
              key={idx}
              current={idx === currentStep}
              model={question}
            />
          ))}
          <Button onClick={previous} type="button">
            Forrige
          </Button>
          <Button onClick={next} type="button">
            Neste
          </Button>
        </>
      )}
      {state === QuizState.Summary && (
        <>
          {context &&
            context.result &&
            context.score &&
            {
              [QuizResult.Fail]: <QuizResultFail score={context?.score} />,
              [QuizResult.Almost]: <QuizResultAlmost score={context?.score} />,
            }[context.result]}
          <Button onClick={() => location.assign("/quiz")} type="button">
            Til oversikten
          </Button>
        </>
      )}
    </form>
  );
};

// Maybe not like this, but in one component
const QuizResultFail = ({ score }) => (
  <div>
    <p>todo bilde</p>
    <h2>Vi må ta en prat...</h2>
    <p>
      Du svarte riktig på <strong>{score}%</strong> av spørsmålene. Les deg opp
      på temaet og prøv igjen!
    </p>
  </div>
);

const QuizResultAlmost = ({ score }) => (
  <div>
    <p>todo bilde</p>
    <h2>Beklager, nesten!</h2>
    <p>
      Du svarte riktig på <strong>{score}%</strong> av spørsmålene. Les deg opp
      på temaet og prøv igjen!
    </p>
  </div>
);
