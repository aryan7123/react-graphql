import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      title
      description
      status
    }
  }
`;

const SEARCH_PROJECT = gql`
  query SearchProjects($query: String!) {
    searchProjects(query: $query) {
      id
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
        email
      }
    }
  }
`;

export { GET_PROJECTS, GET_PROJECT, SEARCH_PROJECT };
