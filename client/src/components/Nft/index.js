import React from 'react';
import roundPrice from '../../utils/roundPrice';
import { useMutation } from '@apollo/client';
import { ADD_LIKES } from "../../utils/mutations";



function Nft({nft}) {

    const [addLikes, { error }] = useMutation(ADD_LIKES);
    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
          await addLikes({
            variables: { id: nft._id }
          });
    
        } catch (e) {
          console.error(e);
        }
      };

    return (
        <div className='nft'>
            <img onClick={handleFormSubmit} src={nft.imageUrl} height={350}></img>
            <p>Price: {roundPrice(nft.price)} <i className='fab fa-ethereum'></i></p>
            <h2>{nft.nftName}</h2>
            <h3>created by {nft.creator}</h3>
        </div>
    )
}

export default Nft;