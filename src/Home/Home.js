import React, { useState } from "react"
import SearchBar from "../SearchBar/SearchBar"
import SearchResults from "../SearchResults/SearchResults"
import BeerList from "../BeerList/BeerList"
import styles from "./Home.module.css"

const PER_PAGE = 20
const INITIAL_PAGE = 1

function Home() {
  const [searchTerm, setSearchTerm] = useState(null)
  const [page, setPage] = useState(INITIAL_PAGE)

  const onChangeSearch = ({ value }) => {
    setPage(INITIAL_PAGE)
    setSearchTerm(value)
  }

  const prevPage = () => setPage(page - 1 || INITIAL_PAGE)
  const nextPage = () => setPage(page + 1)

  return (
    <section>
      <SearchBar onChange={onChangeSearch} placeholder="Type to search..." />

      {searchTerm && (
        <SearchResults page={page} perPage={PER_PAGE} beerName={searchTerm}>
          {({ error, loading, response }) => {
            if (error) {
              return <p className="error">Request error</p>
            }

            if (loading) {
              return <p>Loading...</p>
            }

            return (
              <>
                <BeerList beers={response} />

                <nav className={styles.pages}>
                  {page > INITIAL_PAGE && (
                    <button
                      className={styles.prevPage}
                      type="button"
                      onClick={prevPage}
                    >
                      Back page
                    </button>
                  )}

                  {response.length === PER_PAGE && (
                    <button
                      className={styles.nextPage}
                      type="button"
                      onClick={nextPage}
                    >
                      Next page
                    </button>
                  )}
                </nav>
              </>
            )
          }}
        </SearchResults>
      )}
    </section>
  )
}

export default Home
