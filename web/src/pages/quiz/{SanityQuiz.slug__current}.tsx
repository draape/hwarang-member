import React, { FC } from "react";
import { graphql } from "gatsby";

import Layout from "../../components/layout/layout";
import { Container } from "../../components/container/container";

interface QuizPageProps {
  data: { quiz: any };
}

const QuizPage: FC<QuizPageProps> = ({ data: { quiz } }) => {
  return (
    <Layout>
      <Container>
        <h1>{quiz.title}</h1>
        <p>{quiz.description}</p>
        {quiz.questions.map((question) =>
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

export default QuizPage;
