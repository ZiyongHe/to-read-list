import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Saved from './components/Saved'
import Result from './components/Result'
import Search from './components/Search'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Navigation />
      <div>
        <Route exact path="/" component={Search}></Route>
        <Route exact path="/result" component={Result}></Route>
        <Route exact path="/saved" component={Saved}></Route>
      </div>
    </HashRouter>
  )
}

export default App
