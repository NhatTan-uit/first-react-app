import React from 'react'
import { Routes } from 'react-router'
import { Route } from 'react-router-dom'
import TrangBa from './components/MyBody/TrangBa'
import TrangHai from './components/MyBody/TrangHai'
import TrangMot from './components/MyBody/TrangMot'

function MyRoutes() {
  return (
    <Routes>
      <Route path='/trang1' element={<TrangMot />} />
      <Route path='/trang2' element={<TrangHai />} />
      <Route path='/trang3' element={<TrangBa />} />
    </Routes>
  )
}

export default MyRoutes