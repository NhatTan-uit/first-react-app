import React from 'react'
import { Routes } from 'react-router'
import { Route } from 'react-router-dom'
import LoginForm from './components/functionality/authorization/LoginForm/LoginForm'
import UserImageModify from './components/functionality/userinfomodify/UserImageModify/UserImageModify'
import TrangBa from './components/MyBody/TrangBa'
import TrangHai from './components/MyBody/TrangHai'
import TrangMot from './components/MyBody/TrangMot'
import Home from './components/MyBody/Home/Home'

function MyRoutes( {toRoute} ) {
  return (
    <Routes>
      <Route path='/' element={<Home toHome={toRoute} />} />
      <Route path='/trang1' element={<TrangMot />} />
      <Route path='/trang2' element={<TrangHai />} />
      <Route path='/trang3' element={<TrangBa />} />
      <Route path='/loginform' element={<LoginForm />} />
      <Route path='/changeimage' element={<UserImageModify />} />
    </Routes>
  )
}

export default MyRoutes