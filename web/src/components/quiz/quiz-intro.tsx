import React, { useContext } from "react";
import { QuizDispatchContext } from "./quiz-context";
import { Button } from "../button/button";

export const QuizIntro = ({ description }) => {
  const { next } = useContext(QuizDispatchContext);

  const startQuiz = () => {
    next();
  };

  return (
    <>
      <p>{description}</p>
      <Button onClick={startQuiz} type="button">
        Start
      </Button>
    </>
  );
};
