import React, { FC, ReactNode } from "react";
import { Link } from "gatsby";
import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image";

type CardProps = {
  title?: string;
  link?: string;
  subtitle?: string;
  image?: IGatsbyImageData;
  imageAlt?: string;
  children: ReactNode;
};

export const Card: FC<CardProps> = ({
  title,
  subtitle,
  link,
  image,
  imageAlt,
  children,
}) => {
  const cardContents = (
    <>
      {image && (
        <GatsbyImage className="card__image" image={image} alt={imageAlt} />
      )}
      <h2 className="card__title">{title}</h2>
      {subtitle && <span className="card__subtitle">{subtitle}</span>}
    </>
  );

  return (
    <div className="card">
      {link !== undefined ? (
        <Link to={link} className="card__link">
          {cardContents}
        </Link>
      ) : (
        children || cardContents
      )}
    </div>
  );
};
