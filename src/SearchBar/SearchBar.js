import React from "react"
import { string } from "prop-types"
import styles from "./SearchBar.module.css"

function SearchBar({ placeholder }) {
  return (
    <input
      placeholder={placeholder}
      className={styles.field}
      type="text"
      name="q"
    />
  )
}

SearchBar.propTypes = {
  placeholder: string.isRequired
}

export default SearchBar
