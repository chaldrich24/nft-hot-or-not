import React from "react";

function List({ nft }) {
    return (
      <li className="item d-flex align-items-center justify-content-between leaderboard-row">
        <div className="item__avatar">
          <img
            className="item__avatar__img"
            src={nft.imageUrl}
            alt={nft.nftName}
            height={100}
          />
        </div>
        <div className="d-flex align-items-center">
          <span className="item__name ms-3">{nft.nftName}</span>
          <span className="item__score ms-5">Likes: {nft.likes}</span>
        </div>
      </li>
    );
  }
  export default List;