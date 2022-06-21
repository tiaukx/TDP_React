import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';

import Home from '../src/Routing_Exercise/Home';
import Contact from '../src/Routing_Exercise/Contact';
import Users from '../src/Routing_Exercise/Users';
import NotFound from '../src/Routing_Exercise/NotFound'
import Nav from '../src/Routing_Exercise/Nav';

function App() {
  return (
    <div className="App">
      <Header/>

      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route exact path ="/" element={<Home/>}/>
          <Route exact path ="/Contact" element={<Contact/>}/>
          <Route exact path ="/Users" element={<Users/>}/>
          <Route path = "*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;