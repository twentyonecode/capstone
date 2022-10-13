import React, { useState, useEffect } from "react"
import GymIndex from "./pages/GymIndex"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import mockGyms from "./mockGyms"
import Header from "./components/Header"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProtectedGymIndex from "./pages/ProtectedGymIndex"
import GymEdit from "./pages/GymEdit"
import GymShow from "./pages/GymShow"
import GymNew from "./pages/GymNew"

const App = (props) => {

  const [gyms, setGyms] = useState(mockGyms)

  useEffect(() => {
    readGyms()
  }, [])

  const createGym = (gym) => {
    console.log("this is a flag", JSON.stringify(gym))
    fetch("/gyms", {
      body: JSON.stringify(gym),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => response.json())
      .then(payload => readGyms())
      .catch(errors => console.log(errors))
  }

  const readGyms = () => {
    console.log("flag", gyms)
    fetch("/gyms")
      .then((response) => response.json())
      .then((payload) => {
        setGyms(payload)
      })
      .catch((error) => console.log(error))
  }

  const updateGym = (gym, id) => {
    fetch(`/gyms/${id}`, {
      body: JSON.stringify(gym),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
      .then((response) => response.json())
      .then((payload) => readGyms())
      .catch((errors) => console.log("Gym update errors:", errors))
  }
  return (
    <BrowserRouter>

      <Header {...props} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gymindex" element={<GymIndex gyms={gyms} />} />
        <Route path="/protectedgymindex" element={<ProtectedGymIndex gyms={gyms} {...props} />} />
        <Route path="/gymedit/:id" element={<GymEdit gyms={gyms} updateGym={updateGym} currentUser={props.current_user} />} />
        <Route path="/gymnew" element={<GymNew createGym={createGym} currentUser={props.current_user} />} />
        <Route path="/gymshow/:id" element={<GymShow gyms={gyms} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}



export default App