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

const DELETE_PROJECT = gql`
  mutation deleteProject($id: ID!) {
    deleteProject(id: $id) {
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

const EDIT_PROJECT = gql`
  mutation updateProject(
    $id: ID!
    $title: String!
    $description: String!
    $status: String!
  ) {
    updateProject(
      id: $id
      title: $title
      description: $description
      status: $status
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
