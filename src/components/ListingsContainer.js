import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleDelete }) {
  const listingsCard = listings.map( (listing) => {
    return <ListingCard
    key={listing.id}
    listing={listing}
    onDelete={handleDelete}
    />
  })

  return (
    <main>
      <ul className="cards">
        {listingsCard}
      </ul>
    </main>
  );
}

export default ListingsContainer;
