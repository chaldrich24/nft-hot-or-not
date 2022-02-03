import React from 'react';
import roundPrice from '../../utils/roundPrice';
import { useMutation } from '@apollo/client';
import { ADD_LIKES, ADD_NONLIKE } from "../../utils/mutations";

function Nft({nft, otherNftId}) {
    const [addLikes, { error }] = useMutation(ADD_LIKES);
    const [addNonLike, {errorNon}] = useMutation(ADD_NONLIKE);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(otherNftId);
    
        try {
          await addLikes({
            variables: { id: nft._id }
          });

          await addNonLike({
            variables: {id: otherNftId}
          });
    
        } catch (e) {
          console.error(e);
        }

        window.location.reload(false);
      };

    return (
        <div className='nft'>
            <img onClick={handleFormSubmit} src={nft.imageUrl} height={300}></img>
            <p>Price: {roundPrice(nft.price)} <i className='fab fa-ethereum'></i></p>
            <h2>{nft.nftName}</h2>
            <h3>created by {nft.creator}</h3>
        </div>
    )
}

export default Nft;