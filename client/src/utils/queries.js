import { gql } from '@apollo/client';

export const QUERY_NFTS = gql`
    query nfts {
        nfts {
            nftName
            imageUrl
            price
            creator
        }
    }
`;