import React from "react"
import { Link } from "react-router-dom"
import { string } from "prop-types"
import styles from "./Logo.module.css"

function Logo({ alt }) {
  return (
    <h1 className={styles.logo}>
      <Link to="/">
        <img className={styles.img} src="/logo.png" alt={alt} />
      </Link>
    </h1>
  )
}

Logo.propTypes = {
  alt: string.isRequired
}

export default Logo
