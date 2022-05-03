import React from "react";
import { getGatsbyImageData } from "gatsby-source-sanity";
import { Card } from "../card/card";

export const SanityGweBlock = ({ node }) => {
  const image = getGatsbyImageData(
    node.image.asset._ref,
    { width: 768 },
    {
      projectId: process.env.GATSBY_SANITY_PROJECT_ID,
      dataset: process.env.GATSBY_SANITY_DATASET,
    }
  );

  return (
    <div className="gwe-card">
      <Card
        title="Gwe"
        subtitle={node.description}
        image={image}
        imageAlt={node.image.alt}
      />
    </div>
  );
};
