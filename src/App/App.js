import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Home from "../Home/Home"
import ViewBeer from "../ViewBeer/ViewBeer"
import Logo from "../Logo/Logo"
import Nav from "../Nav/Nav"
import styles from "./App.module.css"

function App() {
  return (
    <main className={styles.main}>
      <BrowserRouter>
        <Logo alt="Craft Beer" />
        <Nav />

        <Route path="/" exact component={Home} />
        <Route path="/view/:id" component={ViewBeer} />
      </BrowserRouter>
    </main>
  )
}

export default App
