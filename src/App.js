import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Header,{NavMenu} from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'

import '../src/styles/App.scss';
import'../src/styles/Service.scss';
import '../src/styles/Contacts.scss';
import '../src/styles/Footer.scss';
import '../src/styles/mediaquery.scss';
import { useState } from 'react'


function App() {
  const [menuOpen,setMenuOpen]=useState(false)
  console.log(menuOpen)
  return (
   <>
   <BrowserRouter>
   <NavMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
   <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/services' element={<Services/>}/>
   <Route path='/contacts' element={<Contacts/>}/>
   </Routes>
   <Footer/>
   <Toaster/>
   </BrowserRouter>
   
   </>
  );
}

export default App;
