import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Saved from './components/Saved'
import Search from './components/Search'

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route exact path="/" component={Search}></Route>
      <Route exact path="/saved" component={Saved}></Route>
    </HashRouter>
  )
}

export default App
