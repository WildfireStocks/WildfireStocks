import * as React from "react"
import { Router } from '@reach/router'
import '../style/index.css'
import StockView from '../templates/StockView'
import Header from '../components/Header.js'

const SomeSubPage = props => {
    return <div>Hi from SubPage with id: {props.id}</div>
  }
// markup
const IndexPage = () => {
  return (
    <main>
    <Router>
      // ...dynamic routes here
      <SomeSubPage path="/stocks/:id" />
    </Router>
      <title>Home Page</title>
      <Header/>
    </main>
  )
}

export default IndexPage
