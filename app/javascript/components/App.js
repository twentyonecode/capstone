import React from "react"
import Header from "./components/Header"
import GymIndex from "./pages/GymIndex"
import { Routes, Route } from "react-router-dom"

const App = (props) => {
  return (
    <>
      <Header {...props} />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gymindex" element={<GymIndex />} />
    </Routes>
    </>
  )
}

export default App
