import React from "react"
import { node } from "prop-types"
import styles from "./Nav.module.css"

function Nav({ children }) {
  return (
    <nav className={styles.nav}>
      <a className={styles.item} href="/cooler">
        See the bar
      </a>

      {children}
    </nav>
  )
}

Nav.propTypes = {
  children: node.isRequired
}

export default Nav
