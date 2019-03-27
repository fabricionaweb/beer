import React, { useState } from "react"
import SearchBar from "../SearchBar/SearchBar"
import SearchResults from "../SearchResults/SearchResults"
import BeerList from "../BeerList/BeerList"
import Logo from "../Logo/Logo"
import Nav from "../Nav/Nav"
import styles from "./App.module.css"

function App() {
  const [searchTerm, setSearchTerm] = useState(null)
  const onChangeSearch = ({ value }) => setSearchTerm(value)

  return (
    <main className={styles.main}>
      <Logo alt="Craft Beer" />
      <Nav>
        <SearchBar onChange={onChangeSearch} placeholder="Type to search..." />
      </Nav>

      <section className={styles.listBeers}>
        {searchTerm && (
          <SearchResults beerName={searchTerm}>
            {({ error, loading, response }) => {
              if (error) {
                return <p className={styles.error}>Request error</p>
              }

              if (loading) {
                return <p>Loading...</p>
              }

              if (response.length === 0) {
                return <p>No beers found</p>
              }

              return <BeerList beers={response} />
            }}
          </SearchResults>
        )}
      </section>
    </main>
  )
}

export default App
