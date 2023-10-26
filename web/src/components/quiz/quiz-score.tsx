import React, { useContext } from "react";
import { QuizContext } from "./quiz-context";
import { QuizResult } from "./types";
import { Button } from "../button/button";

export const QuizScore = () => {
  const { score, result } = useContext(QuizContext);

  return (
    <div className="quiz-score">
      {(result &&
        score &&
        {
          [QuizResult.Fail]: <QuizResultFail score={score} />,
          [QuizResult.Almost]: <QuizResultAlmost score={score} />,
          [QuizResult.Pass]: <QuizResultPass score={score} />,
          [QuizResult.Perfect]: <QuizResultPerfect score={score} />,
        }[result]) || <QuizResultFail score={score} />}
      <Button onClick={() => location.assign("/quiz")} type="button">
        Til oversikten
      </Button>
    </div>
  );
};

const QuizResultFail = ({ score }) => (
  <>
    <img src="/fail.png" alt="Mann i drakt som sitter" />
    <h1>Vi må ta en prat...</h1>
    <p>
      Du svarte riktig på <strong>{score}%</strong> av spørsmålene. Les deg opp
      på temaet og prøv igjen!
    </p>
  </>
);

const QuizResultAlmost = ({ score }) => (
  <>
    <img src="/almost.png" alt="Mann i drakt som bukker" />
    <h1>Beklager, nesten!</h1>
    <p>
      Du svarte riktig på <strong>{score}%</strong> av spørsmålene. Les deg opp
      på temaet og prøv igjen!
    </p>
  </>
);

const QuizResultPass = ({ score }) => (
  <>
    <img src="/pass.png" alt="Mann i drakt som knytter neven" />
    <h1>Du klarte det!</h1>
    <p>
      Du svarte riktig på <strong>{score}%</strong> av spørsmålene. Er du klar
      for å forbedre svaret ditt?
    </p>
  </>
);

const QuizResultPerfect = ({ score }) => (
  <>
    <img src="/perfect.png" alt="Mann i drakt som sparker" />
    <h1>Perfekt!</h1>
    <p>
      Du svarte riktig på <strong>{score}%</strong> av spørsmålene! Du er
      mesteren 👊🏻
    </p>
  </>
);
