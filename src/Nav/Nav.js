import React from "react"
import styles from "./Nav.module.css"

function Nav() {
  return (
    <nav className={styles.nav}>
      <a className={styles.item} href="/cooler">
        See the bar
      </a>
    </nav>
  )
}

export default Nav
