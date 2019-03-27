import React from "react"
import ReactDOM from "react-dom"
import BeerItem from "./BeerItem"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<BeerItem />, div)
  ReactDOM.unmountComponentAtNode(div)
})
