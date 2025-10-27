import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './page/LandingPage'
import Single from './page/Single'
import { BrowserRouter, Route, Routes } from "react-router"
import Register from './page/Register'
import Cart from './page/Cart'
import Procceed from './page/Procceed'
import { ToastContainer } from 'react-toastify'
import Shop from './page/shop'
import Nav from './page/Nav'
import Login from './page/Login'
import Footer from './page/Footer'
import About from './page/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element ={<LandingPage/>} path='/'/>
        <Route element ={<Single/>} path='/Single/:id'/>
        <Route element={<Register/>} path='/register'/>
        <Route element={<Login/>} path='/login'/>
        <Route element={<Cart/>} path='/cart'/>
        <Route element={<Shop/>} path='/shop'/>
        <Route element={<Procceed/>} path='/proo'/>
        <Route element={<About/>} path='/about'/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    <ToastContainer/>
    </>
  )
}

export default App
