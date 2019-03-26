import React from "react"
import { string } from "prop-types"
import styles from "./Logo.module.css"

function Logo({ alt }) {
  return (
    <h1 className={styles.logo}>
      <a href="/">
        <img className={styles.img} src="/logo.png" alt={alt} />
      </a>
    </h1>
  )
}

Logo.propTypes = {
  alt: string.isRequired
}

export default Logo
