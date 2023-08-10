import React from "react";
import { navigate } from "gatsby";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

import Layout from "../components/layout/layout";
import { Card } from "../components/card/card";
import { Grade, QuizLevel } from "../components/quiz-level/quiz-level";
import { Button } from "../components/button/button";
import { Profile } from "../components/profile/profile";
import { Container } from "../components/container/container";

const IndexPage = () => {
  const { user } = useAuth0();
  return (
    <Layout title="Min side">
      <Container>
        <h1>Min side</h1>

        {user && (
          <Card>
            <Profile
              name={user.name!}
              dateOfBirth="5. juli 1985"
              club="Holmen"
              belt="Svart belte, 5. dan"
            />
          </Card>
        )}

        <Card>
          <QuizLevel grade={Grade.Cup2} experience={429} nextLevel={800} />
        </Card>
        <Button type="button" onClick={() => navigate("/quiz")}>
          Ta en quiz
        </Button>
      </Container>
    </Layout>
  );
};

export default withAuthenticationRequired(IndexPage);
