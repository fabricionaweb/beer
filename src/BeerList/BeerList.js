import React from "react"
import { arrayOf, object } from "prop-types"
import BeerItem from "../BeerItem/BeerItem"

function BeerList({ beers }) {
  if (beers.length === 0) {
    return <p>No beers found</p>
  }

  return beers.map(beer => (
    <BeerItem
      key={beer.id}
      id={beer.id}
      name={beer.name}
      tagline={beer.tagline}
      imageUrl={beer.image_url}
    />
  ))
}

BeerList.propTypes = {
  beers: arrayOf(object).isRequired
}

export default BeerList
