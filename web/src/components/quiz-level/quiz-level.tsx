import React, { FC } from "react";
import { Progress } from "../progress/progess";
import { Tag, TagColor } from "../tag/tag";

export enum Grade {
  Cup10 = 10,
  Cup9 = 9,
  Cup8 = 8,
  Cup7 = 7,
  Cup6 = 6,
  Cup5 = 5,
  Cup4 = 4,
  Cup3 = 3,
  Cup2 = 2,
  Cup1 = 1,
  Dan1 = 11,
}

type QuizLevelProps = {
  grade: Grade;
  experience: number;
  nextLevel: number;
};

export const QuizLevel: FC<QuizLevelProps> = ({
  grade,
  experience,
  nextLevel,
}) => (
  <div className="quiz-level">
    <h2>Din teorigrad er</h2>
    <Tag color={mapBeltColor(grade)}>{mapGradeName(grade)}</Tag>
    <Progress experience={experience} nextLevel={nextLevel} />
  </div>
);

export const mapGradeName = (grade: Grade) =>
  ({
    [Grade.Cup10]: "10. cup",
    [Grade.Cup9]: "9. cup",
    [Grade.Cup8]: "8. cup",
    [Grade.Cup7]: "7. cup",
    [Grade.Cup6]: "6. cup",
    [Grade.Cup5]: "5. cup",
    [Grade.Cup4]: "4. cup",
    [Grade.Cup3]: "3. cup",
    [Grade.Cup2]: "2. cup",
    [Grade.Cup1]: "1. cup",
    [Grade.Dan1]: "1. dan",
  }[grade]);

export const mapBeltColor = (grade: Grade): TagColor =>
  ({
    [Grade.Cup10]: TagColor.White,
    [Grade.Cup9]: TagColor.White,
    [Grade.Cup8]: TagColor.Yellow,
    [Grade.Cup7]: TagColor.Yellow,
    [Grade.Cup6]: TagColor.Green,
    [Grade.Cup5]: TagColor.Green,
    [Grade.Cup4]: TagColor.Blue,
    [Grade.Cup3]: TagColor.Blue,
    [Grade.Cup2]: TagColor.Red,
    [Grade.Cup1]: TagColor.Red,
    [Grade.Dan1]: TagColor.Black,
  }[grade]);
