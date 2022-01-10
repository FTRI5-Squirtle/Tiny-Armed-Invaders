//This is the file that is exported and then rendered by your entry point 'index.js'
//If you are planning on utilizing React Routers, I have set up a boilerplate below this component with some example routing.
//React Routers are not included in this boilerplate so if you plan on using React Routers, you would need to install react-router-dom
//Otherwise this file would act as your initial component.  Happy coding!

import React  from 'react';


export default function App() {
  return (
    <div>
      <h1>Welcome to your project.</h1>
    </div>
  )
}

//If you plan on using React Routers, this is where you would start that process.  
//Here is some boilerplate for Routes which you would set up based on your components.

// import React from 'react';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Homepage from './components/Homepage.jsx';

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route exact path="/" element={<Homepage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }