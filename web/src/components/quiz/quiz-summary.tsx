import React, { useContext } from "react";

import { Button, ButtonTheme } from "../button/button";
import { QuizDispatchContext } from "./quiz-context";

export const QuizSummary = () => {
  const { previous, submit } = useContext(QuizDispatchContext);
  return (
    <>
      <p>Er du klar til å sende inn svaret ditt?</p>
      <div className="quiz-questions__controls">
        <Button onClick={submit} type="button">
          Send inn
        </Button>
        <Button theme={ButtonTheme.Pill} onClick={previous} type="button">
          Gå tilbake
        </Button>
      </div>
    </>
  );
};
