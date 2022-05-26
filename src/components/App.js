import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

/*
Deliverables:
 [x] When the app starts, I can see all listings.

 [x] I can "favorite" and "unfavorite" a listing on the frontend by clicking the star icon. This feature doesn't need backend persistence.

 [x] I can remove a listing from the page by clicking the trash can icon. This change should be persisted in the backend.

 [x] I can search for listings by their name.
*/
function App() {
  // set up the useState of the listings and the search for listings
  const [ listings, setListings ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState("");
  // fetch the data using UseEffect
  useEffect( () => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(setListings)
  }, []);

  const handleListingDelete = (id) => {
    const filteredList = listings.filter( listing => listing.id !== id)
    return setListings(filteredList);
  }

  const listingsToDisplay = listings.filter( listing => {
    return listing.description.toLowerCase().includes(searchTerm.toLowerCase());
  })

  return (
    <div className="app">
      <Header handleSearch={setSearchTerm}/>
      <ListingsContainer listings={listingsToDisplay} handleDelete={handleListingDelete}/>
    </div>
  );
}

export default App;
