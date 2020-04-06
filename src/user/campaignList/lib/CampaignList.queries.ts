import { gql } from "apollo-boost";

export const CAMPAIGN_LIST = gql`
query advertiser($id: String!) {
advertiser(id: $id){
    campaigns {
        id
        name
        state
        dailyBudget
        budget
        spent
        currency
        createdAt
        startAt
        endAt
        currency
        pacingIndex
        engagements {
            createdat
            type
            count
            currency
            price
            android
            ios
            linux
            macos
            windows
            other
        }
    }
}
}
`;
