import { gql } from '@apollo/client/core'

export const QUERY_PASSIONS = gql`
    query passions($category: String) {
        passions(category: $category) {
            key
            label
            category
        }
    }
`;
