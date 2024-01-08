import { gql } from "@apollo/client";

const ADD_PROJECT = gql`
    mutation addProject($title: String!, $description: String!, $status: String!, $studentId: ID!) {
        addProject(title: $title, description: $description, status: $status, studentId: $studentId) {
            id
            title
            description
            status
            studentId {
                id
                name
            }
        }
    }
`;

export { ADD_PROJECT };