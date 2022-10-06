import React from "react"
import Header from "./components/Header"
import GymIndex from "./pages/GymIndex"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react'

const App = (props) => {


  return (
    <BrowserRouter>
      <Header {...props} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gymindex" element={<GymIndex />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
