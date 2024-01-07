import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      title
      description
      status
      student {
        id
        name
      }
    }
  }
`;

const GET_PROJECT = gql`
  query getProject($id: ID!) {
    project(id: $id) {
      id
      title
      description
      status
      student {
        id
        name
      }
    }
  }
`;

export { GET_PROJECTS, GET_PROJECT };
