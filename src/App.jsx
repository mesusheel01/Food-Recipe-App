import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Favorites from './components/pages/Favorites'
import Details from './components/pages/Details'


const App = () => {
  return (
    <div>
        <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
          <Navbar />
          <Routes>
            <Route 
              path='/'
              element={<Home />} 
            />
            <Route 
              path='/favorites'
              element={<Favorites/>}
            />
            <Route 
              path='/recipe-item/:id'
              element={<Details/>}
            />
          </Routes>
        </div>
    </div>
  )
}

export default App
