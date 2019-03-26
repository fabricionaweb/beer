import React from "react"
import styles from "./App.module.css"

function App() {
  return (
    <main className={styles.main}>
      <h1 className={styles.logo}>
        <a href="/">
          <img src="/logo.png" alt="Craft Beer" />
        </a>
      </h1>

      <nav className={styles.nav}>
        <a className={styles.navItem} href="/cooler">
          See the bar
        </a>

        <input
          placeholder="Type to search..."
          className={styles.searchBar}
          type="text"
          name="q"
        />
      </nav>
    </main>
  )
}

export default App
