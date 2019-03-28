import React from "react"
import { arrayOf, object } from "prop-types"
import BeerItem from "../BeerItem/BeerItem"

function BeerList({ beers }) {
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
