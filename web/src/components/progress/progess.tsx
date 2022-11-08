import React, { FC, useEffect, useState } from "react";

type ProgressProps = {
  experience: number;
  nextLevel: number;
};

export const Progress: FC<ProgressProps> = ({ experience, nextLevel }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue((experience / nextLevel) * 100);
  });

  return (
    <div className="progress">
      <span className="progress__bg">
        <span className="progress__bar" style={{ width: `${value}%` }}></span>
      </span>

      <p className="progress__text">
        {experience} av {nextLevel} poeng
      </p>
    </div>
  );
};
