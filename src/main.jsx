import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './app.css'

import { Home } from './pages/Home/Home'
import { About } from './components/About/About'
import { PageProjects } from './pages/PageProjects/PageProjects'
import { PageTechs } from './pages/PageTechs/PageTechs'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
