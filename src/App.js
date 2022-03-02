// import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import React from 'react';
import HomePage from '../src/pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
// const HatsPage=()=>(
//   <div>
//     <h1> HATS PAGE </h1>
//   </div>
// )
function App() {
  return (
    <div >
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
<Header/>
<Switch>
    <Route exact path='/' component={HomePage}/>
     <Route path='/shop' component={ShopPage}/> 
</Switch>

    </div>
  );
}

export default App;
