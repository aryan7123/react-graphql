import { gql } from "@apollo/client";

const GET_STUDENTS = gql`
  query getStudents {
    students {
      id
      name
      age
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
      mobileNumber
      subject
    }
  }
`;

export { GET_STUDENTS, GET_STUDENT };
