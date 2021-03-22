import React from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

import Layout from "../components/layout/layout";

const IndexPage = () => {
  const { user } = useAuth0();
  return (
    <Layout>
      <h1>Hei {user.name}!</h1>
    </Layout>
  );
};

export default withAuthenticationRequired(IndexPage);
