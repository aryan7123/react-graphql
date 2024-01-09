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
      name
      age
      email
      mobileNumber
      subject
    }
  }
`;

export { ADD_STUDENTS };
