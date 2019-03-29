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

      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>

      <h3 className={styles.subTitle}>Description</h3>
      <p className={styles.description}>{beer.description}</p>

      <h3 className={styles.subTitle}>Sheet</h3>
      <dl className={styles.sheet}>
        <dt>ABV</dt>
        <dd>{beer.abv}</dd>
        <dt>EBC</dt>
        <dd>{beer.ebc}</dd>
        <dt>IBU</dt>
        <dd>{beer.ibu}</dd>
        <dt>PH</dt>
        <dd>{beer.ph}</dd>
      </dl>

      <h3 className={styles.subTitle}>Pairs with</h3>
      <ul>
        {beer.food_pairing.map(pair => (
          <li key={pair}>{pair}</li>
        ))}
      </ul>

      <h3 className={styles.subTitle}>Tips</h3>
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
