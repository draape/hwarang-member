import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { navigate } from "gatsby";
import { MenuProvider } from "./src/contexts/menu-context";

const onRedirectCallback = (appState) => {
  // Use Gatsby's navigate method to replace the url
  navigate(appState?.returnTo || "/", { replace: true });
};

export const wrapRootElement = ({ element }) => {
  return (
    <Auth0Provider
      domain={process.env.GATSBY_AUTH0_DOMAIN}
      clientId={process.env.GATSBY_AUTH0_CLIENTID}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      <MenuProvider>{element}</MenuProvider>
    </Auth0Provider>
  );
};
