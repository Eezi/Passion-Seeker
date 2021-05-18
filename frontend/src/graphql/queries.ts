import { gql } from '@apollo/client/core'

export const QUERY_GAME_PASSIONS = gql`
    query gamePassions {
        gamePassions {
            key
            label
            category
        }
    }
`;

export const QUERY_SPORT_PASSIONS = gql`
    query sportPassions {
        sportPassions {
            key
            label
            category
        }
    }
`;