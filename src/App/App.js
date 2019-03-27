import React, { useState } from "react"
import SearchBar from "../SearchBar/SearchBar"
import Logo from "../Logo/Logo"
import Nav from "../Nav/Nav"
import styles from "./App.module.css"

function App() {
  const [search, setSearch] = useState(null)

  const onChangeSearch = ({ value }) => setSearch(value)

  return (
    <main className={styles.main}>
      <Logo alt="Craft Beer" />
      <Nav>
        <SearchBar onChange={onChangeSearch} placeholder="Type to search..." />
      </Nav>

      <section className={styles.listBeers}>
        {search &&
          [...search].map(i => (
            <article key={i} className={styles.beer}>
              <img
                className={styles.beerImg}
                alt="Punk IPA 2007 - 2010"
                src="https://images.punkapi.com/v2/192.png"
              />
              <h2 className={styles.beerTitle}>{i}</h2>
              <p>Post Modern Classic. Spiky. Tropical. Hoppy.</p>
              <a href="/" className={styles.beerBtn}>
                Know more
              </a>
            </article>
          ))}
      </section>
    </main>
  )
}

export default App
