import React, { FC } from "react";
import { graphql } from "gatsby";
import { withAuthenticationRequired } from "@auth0/auth0-react";

import Layout from "../components/layout/layout";
import { Card } from "../components/card/card";
import { Grid } from "../components/grid/grid";

interface CategoryProps {
  data: {
    category: {
      title: string;
    };
    links: {
      nodes: Array<{
        title: string;
        slug: {
          current: string;
        };
      }>;
    };
  };
}

const Category: FC<CategoryProps> = ({ data: { category, links } }) => (
  <Layout title={category.title}>
    <h1>{category.title}</h1>
    <Grid>
      {links.nodes.map((link, i) => (
        <Card key={i} title={link.title} link={`/${link.slug.current}`} />
      ))}
    </Grid>
  </Layout>
);

export const query = graphql`
  query ($id: String) {
    category: sanityCategory(id: { eq: $id }) {
      title
    }
    links: allSanityPage(filter: { category: { id: { eq: $id } } }) {
      nodes {
        title
        slug {
          current
        }
      }
    }
  }
`;

export default withAuthenticationRequired(Category);
