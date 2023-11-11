import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

import Layout from "../../components/layout/layout";
// import { Card } from "../../components/card/card";
import { Grade } from "../../components/quiz-level/quiz-level";
import { Container } from "../../components/container/container";
import { List } from "../../components/list/list";
import { QuizListItem } from "../../components/quiz-list-item/quiz-list-item";
import { graphql } from "gatsby";
import { clearLocalStorage } from "../../components/quiz/quiz-context";

const Quiz: React.FC = ({ data }) => {
  clearLocalStorage();
  return (
    <Layout title="Quiz">
      <Container>
        <h1>Quiz</h1>
        <p>
          Finn ut hva du kan om tae kwon do – hva er din teorigrad? Du kan ta
          hver quiz så mange ganger du vil, det beste resultatet gjelder.
        </p>
        {/* <Card>
              <QuizLevel grade={Grade.Cup2} experience={429} nextLevel={800} />
            </Card> */}
        <List>
          {data.allSanityQuiz.nodes.map((quiz) => (
            <QuizListItem
              key={quiz._id}
              name={quiz.title}
              questions={quiz.questions.length}
              grade={Grade.Dan1}
              url={`/quiz/${quiz.slug.current}`}
            />
          ))}
        </List>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    allSanityQuiz {
      nodes {
        _id
        slug {
          current
        }
        title
        description
        questions {
          title
        }
      }
    }
  }
`;

export default withAuthenticationRequired(Quiz);
