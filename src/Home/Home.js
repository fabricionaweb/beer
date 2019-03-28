import React, { useState } from "react"
import SearchBar from "../SearchBar/SearchBar"
import SearchResults from "../SearchResults/SearchResults"
import BeerList from "../BeerList/BeerList"

function Home() {
  const [searchTerm, setSearchTerm] = useState(null)
  const onChangeSearch = ({ value }) => setSearchTerm(value)

  return (
    <section>
      <SearchBar onChange={onChangeSearch} placeholder="Type to search..." />

      {searchTerm && (
        <SearchResults beerName={searchTerm}>
          {({ error, loading, response }) => {
            if (error) {
              return <p className="error">Request error</p>
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
  )
}

export default Home
