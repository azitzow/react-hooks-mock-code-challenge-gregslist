import React, { useState } from "react";

function ListingCard( { listing, onDelete }) {
  const { id, image, description, location } = listing;

  const [ favorite, setFavorite ] = useState(false);

  const toogleFavorite = () => {
    setFavorite( (favorite) => !favorite);
  }

  const handleDelete = () => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    })
    onDelete(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={ image } alt={ description } />
      </div>
      <div className="details">
        { favorite ? (
          <button className="emoji-button favorite active" onClick={ toogleFavorite }>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={ toogleFavorite }>☆</button>
        )}
        <strong>{ description }</strong>
        <span> · { location }</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
