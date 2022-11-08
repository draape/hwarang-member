import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

import Layout from "../components/layout/layout";
import { Card } from "../components/card/card";
import { Grade, QuizLevel } from "../components/quiz-level/quiz-level";
import { Container } from "../components/container/container";
import { List } from "../components/list/list";
import { QuizListItem } from "../components/quiz-list-item/quiz-list-item";

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
        <List>
          <QuizListItem
            name="Generelt – blått belte"
            questions={12}
            grade={Grade.Cup3}
            url={"asdf"}
          />
          <QuizListItem
            name="Teknikker – grønt belte"
            questions={18}
            grade={Grade.Cup5}
            url={"asdf"}
            score={80}
          />
          <QuizListItem
            name="Teoriprøve 1. dan"
            questions={30}
            grade={Grade.Dan1}
            url={"asdf"}
            score={22}
          />
        </List>
      </Container>
    </Layout>
  );
};

export default withAuthenticationRequired(Quiz);
