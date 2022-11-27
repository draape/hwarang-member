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
        ... on SanityMatchQuestion {
          _type
          title
          choices {
            value
            match
          }
        }
        ... on SanityQuestion {
          _type
          title
          choices {
            title
            isCorrect
          }
        }
      }
    }
  }
`;

export default withAuthenticationRequired(QuizPage);
