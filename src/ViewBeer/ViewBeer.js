import React, { useState, useEffect } from "react"
import { shape, string } from "prop-types"
import { getById } from "../consumer"
import styles from "./ViewBeer.module.css"

function ViewBeer({ match }) {
  const [beer, setBeer] = useState(null)

  useEffect(() => {
    getById(match.params.id).then(response => setBeer(response))
  }, [])

  if (!beer) {
    return <p>Loading...</p>
  }

  return (
    <section className={styles.details}>
      <img className={styles.img} src={beer.image_url} alt={beer.name} />

      <h2 className={styles.title}>{beer.name}</h2>
      <p className={styles.subTitle}>{beer.tagline}</p>

      <h3>Description</h3>
      <p className={styles.description}>{beer.description}</p>

      <h3>Sheet</h3>
      <dl>
        <dt>ABV</dt>
        <dd>{beer.abv}</dd>
        <dt>EBC</dt>
        <dd>{beer.ebc}</dd>
        <dt>IBU</dt>
        <dd>{beer.ibu}</dd>
        <dt>PH</dt>
        <dd>{beer.ph}</dd>
      </dl>

      <h3>Pairs with</h3>
      <ul>
        {beer.food_pairing.map(pair => (
          <li key={pair}>{pair}</li>
        ))}
      </ul>

      <h3>Tips</h3>
      <p>{beer.brewers_tips}</p>
    </section>
  )
}

ViewBeer.propTypes = {
  match: shape({
    params: shape({
      id: string.isRequired
    }).isRequired
  }).isRequired
}

export default ViewBeer
