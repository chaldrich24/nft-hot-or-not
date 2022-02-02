import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router';
import Nft from '../components/Nft';
import { QUERY_NFT } from '../utils/queries';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import Auth from '../utils/auth';

const SingleNft = props => {
    const { id: nftId } = useParams();

    const { loading, data } = useQuery(QUERY_NFT, {
        variables: { id: nftId }
    });

    const nft = data?.nft || {};
    console.log(nft)

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
        <main>
            <Nft nft={nft}/>
        </main>
        <CommentList comments={nft.comments} />
        {Auth.loggedIn() && <CommentForm nftId={nft._id} />}
        </div>
    )
}

export default SingleNft;