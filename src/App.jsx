import React from 'react'
import Nevbar from './components/Nevbar'
 import { Route, Routes } from 'react-router-dom'
import Post from './pages/Post.1'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
       
         <Nevbar />

      <Routes>
        <Route path='/home' element={<Home />} /> 
        <Route path='/post' element={<Post />} />
      </Routes>
    </div>
  )
}

export default App