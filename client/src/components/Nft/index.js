import React from 'react';
import roundPrice from '../../utils/roundPrice';

function Nft({nft}) {
    return (
        <div className='nft'>
            <img src={nft.imageUrl} height={350}></img>
            <p>Price: {roundPrice(nft.price)} <i className='fab fa-ethereum'></i></p>
            <h2>{nft.nftName}</h2>
            <h3>created by {nft.creator}</h3>
        </div>
    )
}

export default Nft;