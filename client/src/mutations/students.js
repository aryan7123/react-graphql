import { gql } from "@apollo/client";

const ADD_STUDENTS = gql`
    mutation addStudent($name: String!, $age: Number!, $mobileNumber: Number!, $subject: String!) {
        addStudent(name: $name, age: $age, mobileNumber: $mobileNumber, subject: $subject) {
            id
            name
            age
            mobileNumber
            subject
        }
    }
`;

export { ADD_STUDENTS };