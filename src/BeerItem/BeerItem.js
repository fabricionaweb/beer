import React from "react"
import { Link } from "react-router-dom"
import { number, string } from "prop-types"
import styles from "./BeerItem.module.css"

function BeerItem({ id, name, tagline, imageUrl }) {
  const beerUrl = `/view/${id}`

  return (
    <article className={styles.beer}>
      <Link to={beerUrl}>
        <img className={styles.img} alt={name} src={imageUrl} />
      </Link>

      <h2 className={styles.title}>
        <Link to={beerUrl}>{name}</Link>
      </h2>

      <p>{tagline}</p>

      <Link to={beerUrl} className={styles.button}>
        Know more
      </Link>
    </article>
  )
}

BeerItem.propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  tagline: string.isRequired,
  imageUrl: string.isRequired
}

export default BeerItem
