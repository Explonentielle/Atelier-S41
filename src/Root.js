import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Acceuil from "./Pages/Acceuil"
import About from "./Pages/About"
import Process from "./Pages/Process"
import Projets from "./Pages/Projets"
import Contact from "./Pages/Contact"
import ProjetDetails from './components/ProjetDetails'
import emailjs from 'emailjs-com';


const Root = () => {
  emailjs.init('ukK4nOqVQx9KqkBHP');
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Acceuil/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Projets" element={<Projets/>} />
            <Route path="/Process" element={<Process/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route exact path="/Process/:title" element={<ProjetDetails/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Root