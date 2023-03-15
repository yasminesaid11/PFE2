import React from 'react';

import './App.css';
import Home from './pages/Home/Home';
import SignIn from './pages/SingIn/SingIn'
import SignUp from './pages/SignUp/SignUp'
import SideBar from './pages/SideBar/SideBar'
import Table from './pages/Table/Table'
import Admin from './pages/Admin/Admin'
import Abonnement from './pages/Abonnement/Abonnement';
import {BrowserRouter ,Routes , Route} from 'react-router-dom';
import Projet from './pages/Projet/Projet';
import Profil from './pages/Profil/Profil';
import NavBar1 from './pages/NavBar1/NavBar1';
import Footer from './pages/Footer/Footer';
import Add2D from './pages/Add2D/Add2D';
import Map from './pages/Map/Map';
import Add3D from './pages/Add3D/Add3D';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
  
  
        <Routes>
   
          <Route path='Home' element={<Home />} />
          <Route path='SignIn' element={<SignIn />} />
          <Route path='SignUp' element={<SignUp />} />
          <Route path='SideBar' element={<SideBar />} />
          <Route path='Table' element={<Table />} />
          <Route path='Admin' element={<Admin />} />
          <Route path='Abonnement' element={<Abonnement />} />
          <Route path='Projet' element={<Projet />} />
          <Route path='Profil' element={<Profil />} />
          <Route path='NavBar1' element={<NavBar1 />}  />
          <Route path='Add2D' element={<Add2D />}  />
          <Route path='Map' element={<Map />}  />
          <Route path='Add3D' element={<Add3D />}  />










        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
