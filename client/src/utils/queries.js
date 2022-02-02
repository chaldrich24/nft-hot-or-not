import { gql } from '@apollo/client';

export const QUERY_NFTS = gql`
    query nfts {
        nfts {
            _id
            nftName
            imageUrl
            price
            creator
            likes
        }
    }
`;

export const QUERY_NFT = gql`
    query nft($id: ID!) {
        nft (_id: $id) {
            nftName
            imageUrl
            price
            creator
            likes
            owner
        }
    }
`