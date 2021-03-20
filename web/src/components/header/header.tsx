import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

const Header: React.FC = () => {
  const result = useStaticQuery(
    graphql`
      query {
        sanitySiteSettings {
          menu {
            type: __typename
            ... on SanityCategory {
              slug {
                current
              }
              title
            }
            ... on SanityPage {
              slug {
                current
              }
              title
            }
          }
        }
      }
    `
  );

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Forsiden</Link>
          </li>
          {result.sanitySiteSettings.menu.map((item, i) => (
            <li key={i}>
              <Link to={buildLink(item.slug.current, item.type)}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

const buildLink = (slug: string, type: string) =>
  type === "SanityCategory" ? `/kategori/${slug}` : `/${slug}`;

export default Header;
