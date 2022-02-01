const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
    }

    type Nft {
        _id: ID
        nftName: String
        creator: String
        owner: String
        price: Float
        likes: Int
        createdAt: String
        imageUrl: String
        comments: [Comment]
    }

    type Comment {
        _id: ID
        commentBody: String
        username: String
        createdAt: String
    }

    type Query {
        nft(_id: ID!): Nft
        nfts: [Nft]
    }

    type Mutation {
        addComment(nftId: ID!, commentBody: String): Nft
        addLike(nftId: ID!): Nft
        deleteComment(commentId: ID!): Nft
    }
`;

module.exports = typeDefs;