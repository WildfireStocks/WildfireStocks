import * as React from "react"
import { Router } from '@reach/router'
import '../style/index.css'
import StockView from '../templates/StockView'
import Header from '../components/Header.js'


// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Router basepath="/stocks">
        <StockView path="/:stockSymbol"></StockView>
      </Router>
      <title>Home Page</title>
      <Header/>
    </main>
  )
}

export default IndexPage
