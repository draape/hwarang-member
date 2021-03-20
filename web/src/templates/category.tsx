import React from "react";
import { graphql, Link } from "gatsby";

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

const Category: React.FC<CategoryProps> = ({ data: { category, links } }) => (
  <main>
    <h1>{category.title}</h1>
    <ul>
      {links.nodes.map((link, i) => (
        <li key={i}>
          <Link to={`/${link.slug.current}`}>{link.title}</Link>
        </li>
      ))}
    </ul>
  </main>
);

export const query = graphql`
  query Category($slug: String) {
    category: sanityCategory(slug: { current: { eq: $slug } }) {
      title
    }
    links: allSanityPage(
      filter: { category: { slug: { current: { eq: $slug } } } }
    ) {
      nodes {
        title
        slug {
          current
        }
      }
    }
  }
`;

export default Category;
