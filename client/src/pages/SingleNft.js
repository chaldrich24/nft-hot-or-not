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
            <main className='d-flex justify-content-center mb-5 single-nft-cont'>

                <div>
                    <img src={nft.imageUrl} height={300}></img>
                    <p> <i className='fab fa-ethereum'></i>{roundPrice(nft.price)}</p>
                </div>
                <div className='d-flex flex-column justify-content-center ms-5'>
                    <h2>{nft.nftName}</h2>
                    <p>Created by: {nft.creator}</p>
                    <p>
                        {nft.likes} likes <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                            <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                        </svg>
                    </p>
                    <div className='prog' >
                        <div className='prog-likes' style={{ width: `${roundPrice(nftPercentLike)}%` }}></div>
                    </div>
                    <p>{roundPrice(nftPercentLike)}% of people like this NFT over others</p>
                </div>

                {/* <Nft nft={nft} /> */}

            </main>
            <CommentList comments={nft.comments} />
            {Auth.loggedIn() && <CommentForm nftId={nft._id} />}
        </div>
    )
}

export default SingleNft;