import { useState, useEffect } from "react"
import { string, number, func } from "prop-types"
import { searchByName } from "../consumer"

function SearchResults({ children, beerName, page, perPage }) {
  const [data, setData] = useState({
    error: false,
    loading: true,
    response: {}
  })

  useEffect(() => {
    searchByName(beerName, page, perPage)
      .then(response => setData({ response }))
      .catch(error => setData({ error }))
  }, [beerName, page])

  return children(data)
}

SearchResults.propTypes = {
  beerName: string.isRequired,
  children: func.isRequired,
  page: number
}

SearchResults.defaultProps = {
  page: 0
}

export default SearchResults
