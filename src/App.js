import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import User from './components/User';
import UserD from './components/UserD';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';
import Erorr from './components/Erorr';
import { useState } from 'react';
function App() {
  const [users, setUsers] = useState([
    {id:'001',name:"Ba Lam 1", email:"nguyenbalam23071@gmail.com"},
    {id:'002',name:"Ba Lam 2", email:"nguyenbalam23072@gmail.com"},
    {id:'003',name:"Ba Lam 3", email:"nguyenbalam23073@gmail.com"},
    {id:'004',name:"Ba Lam 4", email:"nguyenbalam23074@gmail.com"},
    {id:'005',name:"Ba Lam 5", email:"nguyenbalam23075@gmail.com"},
    {id:'006',name:"Ba Lam 6", email:"nguyenbalam23076@gmail.com"},
    {id:'007',name:"Ba Lam 7", email:"nguyenbalam23077@gmail.com"},
    {id:'008',name:"Ba Lam 8", email:"nguyenbalam23078@gmail.com"}
])
  return (
    <div className="App">
      <div className="container">

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/user' element={<User users={users}></User>} />
          <Route path='/user/:userid' element={<UserD users={users}></UserD>}></Route> 
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='*' element={<Erorr />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
