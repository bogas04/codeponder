import gql from "graphql-tag";

export const createCodeReviewMutation = gql`
  mutation CreateCodeReview(
    $startingLineNum: Int!
    $endingLineNum: Int!
    $question: String!
    $path: String!
    $repo: String!
    $branch: String!
    $username: String!
  ) {
    createCodeReviewQuestion(
      question: {
        startingLineNum: $startingLineNum
        endingLineNum: $endingLineNum
        question: $question
        path: $path
        repo: $repo
        branch: $branch
        username: $username
      }
    ) {
      codeReviewQuestion {
        id
        startingLineNum
        endingLineNum
        question
        path
        repo
        branch
        username
        creatorId
      }
    }
  }
`;
