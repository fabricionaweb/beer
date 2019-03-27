import { Component } from "react"
import { string, func } from "prop-types"
import { searchByName } from "../consumer"

class SearchResults extends Component {
  state = {
    error: false,
    loading: true,
    response: {}
  }

  componentDidMount() {
    this.fetch()
  }

  componentDidUpdate({ beerName }) {
    if (this.props.beerName !== beerName) {
      this.fetch()
    }
  }

  onSuccess(response) {
    this.setState({
      response,
      error: false,
      loading: false
    })
  }

  onFailure(error) {
    this.setState({
      error,
      loading: false,
      response: {}
    })
  }

  fetch() {
    searchByName(this.props.beerName)
      .then(this.onSuccess.bind(this))
      .catch(this.onFailure.bind(this))
  }

  render() {
    return this.props.children(this.state)
  }
}

SearchResults.propTypes = {
  beerName: string.isRequired,
  children: func.isRequired
}

export default SearchResults
