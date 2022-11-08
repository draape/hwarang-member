import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

import Layout from "../components/layout/layout";
import { Card } from "../components/card/card";
import { Grade, QuizLevel } from "../components/quiz-level/quiz-level";
import { Container } from "../components/container/container";

const Quiz: React.FC = () => {
  return (
    <Layout>
      <Container>
        <h1>Quiz</h1>
        <p>
          Finn ut hva du kan om tae kwon do – hva er din teorigrad? Du kan ta
          hver quiz så mange ganger du vil, det beste resultatet gjelder.
        </p>
        <Card>
          <QuizLevel grade={Grade.Cup2} experience={429} nextLevel={800} />
        </Card>
      </Container>
    </Layout>
  );
};

export default withAuthenticationRequired(Quiz);
