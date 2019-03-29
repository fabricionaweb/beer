import querystring from "querystring"

const BASE_URL = "https://api.punkapi.com/v2/beers"

function request(url) {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }

    return response.json()
  })
}

export function searchByName(beerName, page = 1, perPage = 10) {
  const qs = querystring.stringify({
    beer_name: beerName,
    per_page: perPage,
    page
  })

  const url = `${BASE_URL}?${qs}`
  return request(url).then(response => response.filter(beer => beer.image_url))
}

export function getById(id) {
  const url = `${BASE_URL}/${id}`
  return request(url).then(([beer]) => beer)
}

export default {
  request,
  searchByName,
  getById
}
