import React from "react";
import { navigate } from "gatsby";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

import Layout from "../components/layout/layout";
import { Card } from "../components/card/card";
import { Grade, QuizLevel } from "../components/quiz-level/quiz-level";
import { Button } from "../components/button/button";

const IndexPage = () => {
  const { user } = useAuth0();
  return (
    <Layout>
      <h1>Hei {user?.name}!</h1>

      <Card>
        <QuizLevel grade={Grade.Cup2} experience={429} nextLevel={800} />
      </Card>
      <Button onClick={() => navigate("/quiz")}>Ta en quiz</Button>
    </Layout>
  );
};

export default withAuthenticationRequired(IndexPage);
