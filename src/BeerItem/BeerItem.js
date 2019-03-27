import React from "react"
import { shape, string } from "prop-types"
import styles from "./BeerItem.module.css"

function BeerItem({ name, tagline, imageUrl }) {
  return (
    <article className={styles.beer}>
      <a href="/">
        <img className={styles.img} alt={name} src={imageUrl} />
      </a>

      <h2 className={styles.title}>
        <a href="/">{name}</a>
      </h2>

      <p>{tagline}</p>

      <a href="/" className={styles.button}>
        Know more
      </a>
    </article>
  )
}

BeerItem.propTypes = shape({
  name: string,
  tagline: string,
  imageUrl: string
}).isRequired

export default BeerItem
