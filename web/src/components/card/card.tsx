import React, { FC } from "react";
import { Link } from "gatsby";
import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image";

type CardProps = {
  title: string;
  link: string;
  subtitle?: string;
  image?: IGatsbyImageData;
  imageAlt?: string;
};

export const Card: FC<CardProps> = ({
  title,
  subtitle,
  link,
  image,
  imageAlt,
}) => (
  <div className="card">
    <Link to={link}>
      {image && (
        <GatsbyImage className="card__image" image={image} alt={imageAlt} />
      )}
      <h2 className="card__title">{title}</h2>
      {subtitle && <span className="card__subtitle">{subtitle}</span>}
    </Link>
  </div>
);
