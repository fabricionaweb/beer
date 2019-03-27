const BASE_URL = "https://api.punkapi.com/v2/beers"

function request(endpoint) {
  return fetch(endpoint).then(res => res.json())
}

export function searchByName(beerName) {
  return request(`${BASE_URL}?beer_name=${encodeURI(beerName)}`)
}

export default {
  request,
  searchByName
}
