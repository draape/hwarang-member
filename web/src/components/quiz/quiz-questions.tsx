import React, { useContext } from "react";
import { QuizContext, QuizDispatchContext } from "./quiz-context";
import { Question } from "./question";
import { Button } from "../button/button";

export const QuizQuestions = ({ questions }) => {
  const { currentStep } = useContext(QuizContext);
  const { next, previous } = useContext(QuizDispatchContext);
  return (
    <>
      {questions.map((question, idx) => (
        <Question key={idx} current={idx === currentStep} model={question} />
      ))}
      <div className="quiz-questions__controls">
        <Button onClick={previous} type="button">
          Forrige
        </Button>
        <Button onClick={next} type="button">
          Neste
        </Button>
      </div>
    </>
  );
};
