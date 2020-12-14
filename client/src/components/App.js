import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header.js'

import Home from './Home'
import About from './About'
import Archives from './Archives'
import Favorites from './Favorites'
import SuccessStories from './SuccessStories'

class App extends React.Component{

  render(){
    return(

          <div className="container">

                <BrowserRouter>
                    <div className="container">
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                      <Route exact path="/archives" component={Archives}/>
                      <Route exact path="/favorites" component={Favorites}/>
                        <Route exact path="/successstories" component={SuccessStories}/>
                   </div>
                </BrowserRouter>

            </div>

    )
  }
}



export default App
