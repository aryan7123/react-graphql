import { gql } from "@apollo/client";

const ADD_PROJECTS = gql`
  mutation addProject(
    $title: String!
    $description: String!
    $status: String!
    $studentId: ID!
  ) {
    addProject(
      title: $title
      description: $description
      status: $status
      studentId: $studentId
    ) {
      title
      description
      status
      student {
        id
        name
        email
      }
    }
  }
`;

export { ADD_PROJECTS };
