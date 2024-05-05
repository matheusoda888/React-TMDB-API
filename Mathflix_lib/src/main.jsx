import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Search from './Pages/Search'
import Movie from './Pages/Movie'
import Popular from './Pages/Popular'
import Breve from './Pages/Breve'
import Exibindo from './Pages/Exibindo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes> 
        
        <Route element={<App />}>
          <Route path='/' element={<Home/>} />
          <Route path='/movie/:id' element={<Movie/>} />
          <Route path='/search' element={<Search/>} />
          <Route path='/popular' element={<Popular/>} />
          <Route path='/exibindo' element={<Exibindo/>} />
          <Route path='/breve' element={<Breve/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
