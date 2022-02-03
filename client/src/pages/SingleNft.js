import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router';
import Nft from '../components/Nft';
import { QUERY_NFT } from '../utils/queries';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import Auth from '../utils/auth';
import roundPrice from '../utils/roundPrice';

const SingleNft = props => {
    const { id: nftId } = useParams();

    const { loading, data } = useQuery(QUERY_NFT, {
        variables: { id: nftId }
    });

    const nft = data?.nft || {};
    
    const nftPercentLike = (nft.likes / (nft.likes + nft.nonLikes)) * 100;
    console.log(roundPrice(nftPercentLike))

    if (loading) {
        return <div>Loading...</div>;
    }
    
    return (
        <div>
            <main className='d-flex flex-column mb-5'>
                <Nft nft={nft} />
                <div className='prog' >
                    <div className='prog-likes' style={{width: `${roundPrice(nftPercentLike)}%`}}></div>
                </div>
                <p>{roundPrice(nftPercentLike)}% of people like this NFT over others</p>
                
            </main>
            <CommentList comments={nft.comments} />
            {Auth.loggedIn() && <CommentForm nftId={nft._id} />}
        </div>
    )
}

export default SingleNft;