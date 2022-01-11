//This is the file that is exported and then rendered by your entry point 'index.js'
//If you are planning on utilizing React Routers, I have set up a boilerplate below this component with some example routing.
//React Routers are not included in this boilerplate so if you plan on using React Routers, you would need to install react-router-dom
//Otherwise this file would act as your initial component.  Happy coding!

import React, { Component }  from 'react';
import GameBoard from './components/GameBoard.jsx';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Route } from 'react-router-dom';
// import { render } from 'react-dom';
import HomePage from './views/HomePage.jsx';


const App = () => (
  <div className='App'>
    <HomePage />
    <GameBoard />
  </div>
)

// class App extends Component {
//   constructor () {
//     super()
//   }
//   render(){
//   return(
//       <div className='App'>
//         <h1>Tiny Armed Invaders</h1>
//         <GameBoard />
//       </div>
//   );}
// }
export default App;

//If you plan on using React Routers, this is where you would start that process.  
//Here is some boilerplate for Routes which you would set up based on your components.

// import React from 'react';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Homepage from './components/Homepage.jsx';
// import { getFreePort } from 'webpack-dev-server';

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route exact path="/" element={<Homepage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
/*
<BrowserRouter>

<Route exact path="/" element={<Login />}></Route>
<Route exact path="/SignUp" element={<SignUp />}></Route>
<Route exact path="/Homepage" element={<HomePage />}></Route>
<Route exact path="/Login" element={<Login />}></Route>
</BrowserRouter>
, document.getElementById('root')
*/