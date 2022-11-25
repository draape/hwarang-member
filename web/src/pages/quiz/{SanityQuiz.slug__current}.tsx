import React, { FC } from "react";
import { graphql } from "gatsby";

import Layout from "../../components/layout/layout";
import { Container } from "../../components/container/container";

interface QuizPageProps {
  data: { sanityQuiz: any };
}

const QuizPage: FC<QuizPageProps> = ({ data: { sanityQuiz } }) => {
  return (
    <Layout>
      <Container>
        <h1>{sanityQuiz.title}</h1>
        <p>{sanityQuiz.description}</p>
        {sanityQuiz.questions.map((question) =>
          question._type === "question" ? (
            <div>
              <h2>{question.title}</h2>
              <ol>
                {question.choices.map((choice) => (
                  <li>
                    {choice.title} {choice.isCorrect ? "✅" : "❌"}
                  </li>
                ))}
              </ol>
            </div>
          ) : (
            <div>
              <h2>{question.title}</h2>
              <ul>
                {question.choices.map((choice) => (
                  <li>
                    {choice.value} - {choice.match}
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    sanityQuiz(id: { eq: $id }) {
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

export default QuizPage;
