import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import BlockContent from "@sanity/block-content-to-react";

import SanityImageBlock from "../components/sanity-image-block/sanity-image-block";

interface PageProps {
  data: {
    page: {
      title: string;
      text: any | any[];
      image: {
        asset: any;
        alt: string;
      };
    };
  };
}

const Page: React.FC<PageProps> = ({ data: { page } }) => {
  const image = getImage(page.image?.asset);
  return (
    <main>
      <h1>{page.title}</h1>
      {image && <GatsbyImage image={image} alt={page.image.alt} />}
      <BlockContent
        blocks={page.text}
        serializers={{
          types: {
            extendedImage: SanityImageBlock,
          },
        }}
      />
    </main>
  );
};

export const query = graphql`
  query Page($slug: String) {
    page: sanityPage(slug: { current: { eq: $slug } }) {
      title
      slug {
        current
      }
      image {
        asset {
          gatsbyImageData(width: 1000)
        }
        alt
      }
      text: _rawText
    }
  }
`;

export default Page;
