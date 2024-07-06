import logo from './logo.svg';
import './App.css';
import React from 'react';
import Register from './register';
import { BrowserRouter } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import Menu from './menu';
import Login from './login';
import Friend from './friend';
import Chat from './caht';
import Otp from './otp';
import Reset from './reset';
import Logo from './logo';
function App() {
  return (
    <div className="App">
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
     <BrowserRouter>
   <Menu/>
   <Routes>
   <Route path='/' element={<Logo/>}/>
    
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/friend' element={<Friend/>}/>
    <Route path='/chat' element={<Chat/>}/>
    <Route path='/otp' element={<Otp/>}/>
    <Route path='/reset' element={<Reset/>}/>





    







       </Routes>
   </BrowserRouter>
      
    </div>
  );
}

export default App;
