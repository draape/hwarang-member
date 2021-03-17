import React from "react";
import { getGatsbyImageData } from "gatsby-source-sanity";
import { GatsbyImage } from "gatsby-plugin-image";

const SanityImageBlock = ({ node }) => {
  if (node.asset.mimeType === "image/gif") {
    return (
      <div className="sanity-image-block">
        <img src={node.asset.url} alt={node.alt} />
        <figcaption className="sanity-image-block__caption">
          {node.caption}
        </figcaption>
      </div>
    );
  }

  const image = getGatsbyImageData(
    node.asset._ref,
    { width: 700 },
    {
      projectId: process.env.SANITY_PROJECT_ID,
      dataset: process.env.SANITY_DATASET,
    }
  );

  return (
    <div className="sanity-image-block">
      <GatsbyImage
        className="sanity-image-block__image"
        image={image}
        alt={node.alt}
      />
    </div>
  );
};

export default SanityImageBlock;
