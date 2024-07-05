import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import BottomFooter from './Components/Footer/BottomFooter'
import About from './Pages/About/About'
import Form from './Components/Form/Form'
import PersonalInfo from './Components/PersonalInfo/PersonalInfo'
import CreditDetail from './Components/CreditDetail/CreditDetail'
import Otp from './Components/Otp/Otp'
import AllInfo from './Components/AllInfo/AllInfo'
import TopFooter from './Components/Footer/TopFooter'
import MidFooter from './Components/Footer/MidFooter'
import Auth from './Components/Auth/Auth'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/Info' element={<AllInfo />} /> 
          <Route path='/Info/otp' element={<Otp />} />  */}
          <Route path='/personal-detail' element={<PersonalInfo />} />
          <Route path='/personal-detail/creadit-detail' element={<CreditDetail />} />
          <Route path='/personal-detail/creadit-detail/otp' element={<Otp />} />
          <Route path='/admin-panel' element={<Auth />} />
        </Routes>
        <TopFooter />
        <Footer />
        <MidFooter />
        <BottomFooter />
      </BrowserRouter>
    </>
  )
}

export default App
