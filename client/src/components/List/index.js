import React from "react";

function listItem({ row }) {
  return (
    <li className="item">
      <div className="item__avatar">
        <img
          className="item__avatar__img"
          src={row.imageUrl}
          alt={row.nftName}
        />
      </div>
      <span className="item__name">{row.nftName}</span>
      <span className="item__score">{row.likes}</span>
      <span className="item__score">{row.nonlikes}</span>
    </li>
  );
}
export default listItem;