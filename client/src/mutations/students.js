import { gql } from "@apollo/client";

const ADD_STUDENTS = gql`
  mutation addStudent(
    $name: String!
    $age: String!
    $mobileNumber: String!
    $email: String!
    $subject: String!
  ) {
    addStudent(
      name: $name
      age: $age
      mobileNumber: $mobileNumber
      email: $email
      subject: $subject
    ) {
      id
      name
      age
      email
      mobileNumber
      subject
    }
  }
`;

const EDIT_STUDENT = gql`
  mutation updateStudent(
    $id: ID!
    $name: String!
    $age: String!
    $mobileNumber: String!
    $email: String!
    $subject: String!
  ) {
    updateStudent(
      id: $id
      name: $name
      age: $age
      mobileNumber: $mobileNumber
      email: $email
      subject: $subject
    ) {
      id
      name
      age
      email
      mobileNumber
      subject
    }
  }
`;

const DELETE_STUDENT = gql`
  mutation deleteStudent($id: ID!) {
    deleteStudent(id: $id) {
      id
    }
  }
`;

export { ADD_STUDENTS, EDIT_STUDENT, DELETE_STUDENT };
