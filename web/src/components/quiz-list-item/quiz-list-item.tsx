import React, { FC } from "react";
import { Grade, mapBeltColor, mapGradeName } from "../quiz-level/quiz-level";
import { Tag, TagColor } from "../tag/tag";

type QuizListItemProps = {
  name: string;
  questions: number;
  grade: Grade;
  url: string;
  score?: number;
};

export const QuizListItem: FC<QuizListItemProps> = ({
  name,
  questions,
  grade,
  url,
  score,
}) => (
  <li className="quiz-list-item">
    <a href={url} className="quiz-list-item__link">
      <div className="quiz-list-item__text">
        <span className="quiz-list-item__title">{name}</span>
        <span>{questions} spørsmål</span>
      </div>
      <div className="quiz-list-item__tags">
        <Tag color={mapBeltColor(grade)}>{mapGradeName(grade)}</Tag>
        {score && (
          <Tag color={score >= 80 ? TagColor.Green : TagColor.Red}>
            {score}%
          </Tag>
        )}
      </div>
    </a>
  </li>
);
