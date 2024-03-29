import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import BlockContent from "@sanity/block-content-to-react";

import Layout from "../components/layout/layout";
import SanityImageBlock from "../components/sanity-image-block/sanity-image-block";
import { Breadcrumb } from "../components/breadcrumb/breadcrumb";
import { Table } from "../components/table/table";

interface PageProps {
  data: {
    page: {
      title: string;
      text: any | any[];
      image: {
        asset: any;
        alt: string;
      };
      category?: {
        title: string;
        slug: {
          current: string;
        };
      };
    };
  };
}

const Page: React.FC<PageProps> = ({ data: { page } }) => {
  const image = getImage(page.image?.asset);

  return (
    <Layout title={page.title}>
      {page.category && (
        <Breadcrumb
          title={page.category.title}
          href={`/${page.category?.slug.current}`}
        />
      )}
      <h1>{page.title}</h1>
      {image && <GatsbyImage image={image} alt={page.image.alt} />}
      {page.text && (
        <BlockContent
          blocks={page.text}
          serializers={{
            types: {
              extendedImage: SanityImageBlock,
              table: ({ node }) => <Table rows={node.rows} />,
            },
          }}
        />
      )}
    </Layout>
  );
};

export const query = graphql`
  query Page($id: String) {
    page: sanityPage(id: { eq: $id }) {
      title
      slug {
        current
      }
      category {
        title
        slug {
          current
        }
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

export default withAuthenticationRequired(Page);
