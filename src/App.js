import React from 'react';
//import logo from './logo.svg';
//import './App.css';
// Importing the Context Provider & Home Component
import MyContextProvider from './contexts/MyContext';
// import Home from './components/Home'
import UserPanel from './components/UserPanel'


function App() {
  // <Home/>
  return (
    <MyContextProvider>
        <UserPanel/>        
    </MyContextProvider>
  );
}


export default App;
