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
import LoadingBar from 'react-top-loading-bar'
import Teams from './conponents/teams'
import Contact from './conponents/contact'
import Post from './conponents/post'
// import { useState } from 'react'
function App() {
  const [progress,setprogress] = useState(0)
  return (
    <>
      <Menu></Menu>
      <Routes>
        <Route exact path='/' setProgress = {setprogress} element = {<Home setProgress = {setprogress}></Home>}></Route>
        <Route exact path='/about' setProgress = {setprogress} element = {<About></About>}></Route>
        <Route exact path='/services' setProgress = {setprogress} element = {<Services></Services>}></Route>
        <Route exact path='/login' setProgress = {setprogress} element = {<Login setProgress = {setprogress}></Login>}></Route>
        <Route exact path='/register' setProgress = {setprogress} element = {<Register></Register>}></Route>
        <Route exact path='/profile' setProgress = {setprogress} element = {<Profile></Profile>}></Route>
        <Route exact path='/userlist' setProgress = {setprogress} element = {<UserList></UserList>}></Route>
        <Route exact path='/team' setProgress = {setprogress} element = {<Teams></Teams>}></Route>
        <Route exact path='/contact' setProgress = {setprogress} element = {<Contact></Contact>}></Route>
        <Route exact path='/addpost' setProgress = {setprogress} element = {<Post></Post>}></Route>
      </Routes>
      <LoadingBar 
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setprogress(0)}
      >
      </LoadingBar>
    </>
  )
}

export default App
