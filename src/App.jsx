import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './app.css'

import { Home } from './pages/Home/Home'
import { PageAboutMe } from './pages/PageAboutMe/PageAboutMe'
import { PageProjects } from './pages/PageProjects/PageProjects'
import { PageTechs } from './pages/PageTechs/PageTechs'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<PageProjects />} />
      <Route path="/tech" element={<PageTechs />} />
      <Route path="/about" element={<PageAboutMe />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
