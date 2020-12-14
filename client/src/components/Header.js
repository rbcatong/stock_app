import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'


import Home from './Home'
import About from './About'
import Archives from './Archives'

class Header extends React.Component{

  render(){
    return(

<div className="container">

 <h1 style={{ textAlign:'center' , paddingTop : '50px' , paddingBottom: '15px' }} >  <Link to="/">  <span style={{ fontSize: '50px' , color : 'black'}}>  Harvest Your Wealth  </span> </Link>    </h1>

 <p style={{ textAlign:'center' }} > Sharing insights on how to grow wealth and gain freedom. </p>

<div>
        <div  className="ui inverted segment">
          <div style={{display: 'flex' ,  justifyContent: 'center'  }}className="ui inverted secondary pointing menu">
             <Link to="/about" className="item"> <p style={{fontSize : '20px'}}>About </p> </Link>
            <Link to="/archives" className="item"> <p style={{fontSize : '20px'}}>Archives  </p></Link>
            <Link to="/favorites" className="item"> <p style={{fontSize : '20px'}}>Favorites </p> </Link>
           <Link to="/successstories" className="item"> <p style={{fontSize : '20px'}}> Success Stories </p> </Link>
          </div>
        </div>
  </div>

</div>






    )
  }
}



export default Header
