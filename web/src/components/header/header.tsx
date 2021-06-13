import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { useAuth0 } from "@auth0/auth0-react";

import Logo from "../../images/logo-web.svg";

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

  const { logout } = useAuth0();

  return (
    <header className="header">
      <a className="header__logo" href="/">
        <img
          className="header__logo-image"
          src={Logo}
          alt="Hwa Rang Taekwondo"
        />
        <div className="header__logo-text">
          <span className="header__logo-title">Hwa Rang</span>
          <span className="header__logo-subtitle">Medlemssider</span>
        </div>
      </a>
      <nav>
        <ul>
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
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Logg ut
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const buildLink = (slug: string, type: string) =>
  type === "SanityCategory" ? `/kategori/${slug}` : `/${slug}`;

export default Header;
