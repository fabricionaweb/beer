import React from "react"
import { string, func } from "prop-types"
import debounce from "lodash/debounce"
import styles from "./SearchBar.module.css"

const DEBOUNCE_TIME = 1000

function SearchBar({ placeholder, onChange }) {
  const debounced = debounce(onChange, DEBOUNCE_TIME)

  return (
    <input
      placeholder={placeholder}
      onChange={event => debounced(event.target)}
      className={styles.field}
      type="text"
      name="q"
    />
  )
}

SearchBar.propTypes = {
  placeholder: string.isRequired,
  onChange: func.isRequired
}

export default SearchBar
