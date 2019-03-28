import { useState, useEffect } from "react"
import { string, func } from "prop-types"
import { searchByName } from "../consumer"

function SearchResults({ children, beerName }) {
  const [data, setData] = useState({
    error: false,
    loading: true,
    response: {}
  })

  useEffect(() => {
    searchByName(beerName)
      .then(response => setData({ response }))
      .catch(error => setData({ error }))
  }, [beerName])

  return children(data)
}

SearchResults.propTypes = {
  beerName: string.isRequired,
  children: func.isRequired
}

export default SearchResults
