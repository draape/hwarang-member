import React, { createContext } from "react";
import { Answer, QuizResult, QuizState } from "./types";
import {
  useLocalStorage,
  useLocalStorageWithReducer,
} from "../../utils/use-local-storage";
import { useAuth0 } from "@auth0/auth0-react";

const LS_KEY_STATE = "quiz_state";
const LS_KEY_CURRENT_STEP = "quiz_current_step";
const LS_KEY_SCORE = "quiz_score";
const LS_KEY_RESULT = "quiz_result";
const LS_KEY_ANSWERS = "quiz_answers";

type QuizModel = {
  state: QuizState;
  currentStep: number;
  score?: number;
  result?: QuizResult;
  answers?: { id; value }[];
};

type QuizDispatchContextType = {
  next: () => void;
  previous: () => void;
  save: ({ id, value }) => void;
  submit: () => void;
};

export const clearLocalStorage = () => {
  localStorage.removeItem(LS_KEY_STATE);
  localStorage.removeItem(LS_KEY_CURRENT_STEP);
  localStorage.removeItem(LS_KEY_RESULT);
  localStorage.removeItem(LS_KEY_SCORE);
  localStorage.removeItem(LS_KEY_ANSWERS);
};

export const QuizContext = createContext<QuizModel>(undefined);
export const QuizDispatchContext = createContext<QuizDispatchContextType>({
  next: () => null,
  previous: () => null,
  save: () => null,
  submit: () => null,
});

const answerReducer = (state, action) => {
  switch (action.type) {
    case "SAVE_ANSWER":
      if (!state.some((answer) => answer.id === action.answer.id)) {
        return [...state, action.answer];
      }

      return state.map((answer) => {
        if (answer.id === action.answer.id) {
          const updatedAnswer = {
            ...answer,
            value: action.answer.value,
          };

          return updatedAnswer;
        }

        return answer;
      });
    default:
      throw new Error();
  }
};

export const QuizProvider = ({ questions, children }) => {
  const { user } = useAuth0();

  const [state, setState] = useLocalStorage(LS_KEY_STATE, QuizState.Intro);
  const [currentStep, setCurrentStep] = useLocalStorage(LS_KEY_CURRENT_STEP, 0);
  const [score, setScore] = useLocalStorage(LS_KEY_SCORE, undefined);
  const [result, setResult] = useLocalStorage(LS_KEY_RESULT, undefined);
  const [answers, dispatchAnswer] = useLocalStorageWithReducer(
    LS_KEY_ANSWERS,
    [],
    answerReducer
  );

  const next = () => {
    if (state === QuizState.Intro) {
      setState(QuizState.Started);
      return;
    }
    if (currentStep === questions.length - 1) {
      setState(QuizState.Submit);
    }
    setCurrentStep(currentStep + 1);
  };

  const previous = () => {
    if (currentStep === 0) {
      setState(QuizState.Intro);
      return;
    }
    setState(QuizState.Started);
    setCurrentStep(currentStep - 1);
  };

  const submit = () => {
    evaluate();
  };

  const save = ({ id, value }) => {
    if (id && value) {
      dispatchAnswer({ type: "SAVE_ANSWER", answer: { id, value } });
    }
  };

  const mapResult = (score: number) => {
    if (score === 100) {
      return QuizResult.Perfect;
    } else if (score > 70) {
      return QuizResult.Pass;
    } else if (score > 50) {
      return QuizResult.Almost;
    } else {
      return QuizResult.Fail;
    }
  };

  const evaluate = () => {
    setState(QuizState.Scoring);
    fetch("/.netlify/functions/score", {
      body: JSON.stringify({
        quiz: "teoriprove-dangradering",
        answers: answers,
        user: {
          name: user.name,
          email: user.email,
        },
      }),
      method: "post",
      headers: new Headers({ "content-type": "application/json" }),
    })
      .then((response) => response.json())
      .then((response) => {
        setScore(response.score);
        setResult(mapResult(response.score));
        setState(QuizState.Summary);
      });
    // score and save, needs to get the progress (how many points earned = MAX(current result - previous result, 0))
  };

  return (
    <QuizContext.Provider
      value={{ state, currentStep, score, result, answers }}
    >
      <QuizDispatchContext.Provider value={{ next, previous, save, submit }}>
        {children}
      </QuizDispatchContext.Provider>
    </QuizContext.Provider>
  );
};
