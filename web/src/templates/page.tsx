import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import BlockContent from "@sanity/block-content-to-react";

import Layout from "../components/layout/layout";
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
    <Layout>
      <h1>{page.title}</h1>
      {image && <GatsbyImage image={image} alt={page.image.alt} />}
      {page.text && (
        <BlockContent
          blocks={page.text}
          serializers={{
            types: {
              extendedImage: SanityImageBlock,
            },
          }}
        />
      )}
    </Layout>
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
