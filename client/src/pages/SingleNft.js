import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router';
import Nft from '../components/Nft';
import { QUERY_NFT } from '../utils/queries';

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
        <main>
            <Nft nft={nft}/>
        </main>
    )
}

export default SingleNft;