import React, { FC, useContext } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { useAuth0 } from "@auth0/auth0-react";

import { MenuContext } from "../../contexts/menu-context";
import { Button } from "../button/button";

export const Menu: FC = () => {
  const { isOpen, setIsOpen } = useContext(MenuContext);
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

  const { logout } = useAuth0();
  return (
    <div className={`menu ${isOpen ? "menu--visible" : ""}`}>
      <ul className="menu__items" onClick={() => setIsOpen(!isOpen)}>
        <li>
          <Link to="/">Forsiden</Link>
        </li>
        <li>
          <Link to="/video-gallery">Videoer</Link>
        </li>
        {result.sanitySiteSettings.menu.map((item, i) => (
          <li key={i}>
            <Link to={buildLink(item.slug.current, item.type)}>
              {item.title}
            </Link>
          </li>
        ))}
        <li>
          <Button
            className="menu__logout"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Logg ut
          </Button>
        </li>
      </ul>
    </div>
  );
};

const buildLink = (slug: string, type: string) =>
  type === "SanityCategory" ? `/kategori/${slug}` : `/${slug}`;
