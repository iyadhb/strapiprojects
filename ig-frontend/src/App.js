import React from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/Home'
import './App.css';
// import Post from './components/Post'





function App() {
  return (
    <div className="App">
    <h2>App</h2>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>

</div>
  )

 
}

export default App;
