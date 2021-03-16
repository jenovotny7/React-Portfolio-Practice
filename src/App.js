import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import MyNavbar from './components/MyNavbar'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import NoMatch from './pages/NoMatch'

export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <MyNavbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/contact' component={Contact} />
            <Route component= {NoMatch} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
