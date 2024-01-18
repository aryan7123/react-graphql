import { gql } from "@apollo/client";

const GET_STUDENTS = gql`
  query getStudents {
    students {
      id
      name
      age
      email
      mobileNumber
      subject
    }
  }
`;

const SEARCH_STUDENT = gql`
  query SearchStudent($query: String!) {
    searchStudents(query: $query) {
      id
      name
      age
      email
      mobileNumber
      subject
    }
  }
`;

const GET_STUDENT = gql`
  query getStudent($id: ID!) {
    student(id: $id) {
      id
      name
      age
      email
      mobileNumber
      subject
    }
  }
`;

export { GET_STUDENTS, GET_STUDENT, SEARCH_STUDENT };
