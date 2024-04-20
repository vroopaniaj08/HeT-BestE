import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './conponents/menu'
import { Route, Routes } from 'react-router-dom'
import Home from './conponents/home'
import About from './conponents/about'
import Services from './conponents/services'
import Login from './conponents/login'
import Register from './conponents/register'
import Profile from './conponents/Profile'
import UserList from './conponents/userList'
function App() {

  return (
    <>
      <Menu></Menu>
      <Routes>
        <Route exact path='/' element = {<Home></Home>}></Route>
        <Route exact path='/about' element = {<About></About>}></Route>
        <Route exact path='/services' element = {<Services></Services>}></Route>
        <Route exact path='/login' element = {<Login></Login>}></Route>
        <Route exact path='/register' element = {<Register></Register>}></Route>
        <Route exact path='/profile' element = {<Profile></Profile>}></Route>
        <Route exact path='/userlist' element = {<UserList></UserList>}></Route>
      </Routes>
    </>
  )
}

export default App
