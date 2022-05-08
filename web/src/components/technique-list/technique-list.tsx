import React, { FC } from "react";

type TechniqueListProps = {
  techniques: { name: string }[];
};

export const TechniqueList: FC<TechniqueListProps> = ({ techniques }) => (
  <>
    <h2>Teknikker</h2>
    <ul className="technique-list">
      {techniques.map((technique, i) => (
        <li className="technique-list__item" key={i}>
          {technique.name}
        </li>
      ))}
    </ul>
  </>
);
