const BASE_URL = "https://api.punkapi.com/v2/beers"

function request(endpoint) {
  return fetch(endpoint).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }

    return response.json()
  })
}

export function searchByName(beerName) {
  return request(`${BASE_URL}?beer_name=${encodeURI(beerName)}`)
}

export function getById(id) {
  return request(`${BASE_URL}/${id}`).then(([beer]) => beer)
}

export default {
  request,
  searchByName,
  getById
}
