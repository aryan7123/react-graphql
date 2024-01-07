import { gql } from "@apollo/client";

const GET_STUDENTS = gql`
  query getStudents {
    students {
      id
      name
      age
      mobileNumber
      subject
      project {
        id
        title
        description
        status
      }
    }
  }
`;

const GET_STUDENT = gql`
  query getStudent($id: ID!) {
    student(id: $id) {
      id
      name
      age
      mobileNumber
      subject
      project {
        id
        title
        description
        status
      }
    }
  }
`;

export { GET_STUDENTS, GET_STUDENT };
