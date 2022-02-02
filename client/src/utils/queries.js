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

export const QUERY_NFT = gql`
  query nft($id: ID!) {
    nft(_id: $id) {
      _id
      nftName
      imageUrl
      price
      creator
      comments {
        _id
        createdAt
        username
        commentBody
      }
    }
  }
`;