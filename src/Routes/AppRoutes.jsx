import React from 'react'
import {Routes, Route} from "react-router-dom"
import Header from '../componets/Header/Header'
import About from '../componets/About/About'
import Projects from '../componets/Projects/Projects'
import Technologies from '../componets/Technologies/Technologies'
import Contact from '../componets/Contact/Contact'

const AppRoutes = () => {
  return (
    <>
    <Header/>
    <Routes>
        <Route path='/' element = {<About/>} />
        <Route path='/projects' element = {<Projects/>} />
        <Route path='/technologies' element = {<Technologies/>} />
        <Route path='/contact' element = {<Contact/>} />

    </Routes>
      
    </>
  )
}

export default AppRoutes
