import React, { FC, useContext } from "react";

import { QuizIntro } from "./quiz-intro";
import { QuizQuestions } from "./quiz-questions";
import { QuizScore } from "./quiz-score";

import { QuizContext, QuizDispatchContext } from "./quiz-context";
import { QuizState, SanityQuestion } from "./types";
import { QuizSummary } from "./quiz-summary";

type QuizProps = {
  title: string;
  description: string;
  questions: SanityQuestion[];
};

export const Quiz: FC<QuizProps> = ({ title, description, questions }) => {
  const { state } = useContext(QuizContext);
  const { submit } = useContext(QuizDispatchContext);

  return (
    <form onSubmit={submit}>
      {state !== QuizState.Summary && state !== QuizState.Scoring && (
        <h1>{title}</h1>
      )}
      {state === QuizState.Intro && <QuizIntro description={description} />}
      {state === QuizState.Started && <QuizQuestions questions={questions} />}
      {state === QuizState.Submit && <QuizSummary />}
      {state === QuizState.Scoring && (
        <div className="quiz-score">
          <p>Sjekker fasit...</p>
        </div>
      )}
      {state === QuizState.Summary && <QuizScore />}
    </form>
  );
};
