import React, { FC } from "react";
import { graphql } from "gatsby";
import { withAuthenticationRequired } from "@auth0/auth0-react";

import Layout from "../../components/layout/layout";
import { Container } from "../../components/container/container";
import { QuizWizard } from "../../components/quiz/quiz-wizard";

interface QuizPageProps {
  data: { quiz: any };
}

const QuizPage: FC<QuizPageProps> = ({ data: { quiz } }) => {
  console.log(quiz);
  return (
    <Layout title={quiz.title}>
      <Container>
        <QuizWizard
          title={quiz.title}
          description={quiz.description}
          questions={quiz.questions}
        />
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    quiz: sanityQuiz(id: { eq: $id }) {
      title
      description
      questions {
        id: _key
        title
        type
        matchChoices {
          title
          value
          matchTitle
          matchValue
        }
        choices {
          title
          value
          isCorrect
        }
      }
    }
  }
`;

export default withAuthenticationRequired(QuizPage);
