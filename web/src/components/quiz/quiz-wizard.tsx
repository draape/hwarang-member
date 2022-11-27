import React, { FC, useEffect, useState } from "react";
import { Button } from "../button/button";
import { QuestionStep } from "./question-step";

export type Question = {
  _type: string;
  title: string;
  choices: Array<QuestionChoice>;
};

export type QuestionChoice = {
  title: string;
  value: string;
  isCorrect: boolean;
};

export type MatchQuestion = {
  _type: string;
  title: string;
  choices: Array<MatchQuestionChoice>;
};

export type MatchQuestionChoice = {
  value: string;
  match: string;
};

type QuizWizardProps = {
  title: string;
  description: string;
  questions: Array<Question | MatchQuestion>;
};

export const QuizWizard: FC<QuizWizardProps> = ({
  title,
  description,
  questions,
}) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step === questions.length + 1) {
      alert("hey!");
      // Save result to Sanity
      // Error handling -> navigate to error page
      // Navigate to summary
    }
  }, [step]);

  return (
    <form>
      <h1>{title}</h1>
      {step === 0 && <p>{description}</p>}
      {questions.map(
        (question, idx) =>
          idx + 1 === step && <QuestionStep key={idx} question={question} />
      )}
      <Button onClick={() => setStep(step + 1)}>
        {{ 0: "Start", [questions.length]: "Fullfør" }[step] ?? "Neste"}
      </Button>
    </form>
  );
};
