import React, {useState, useEffect} from "react"
import GymIndex from "./pages/GymIndex"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import mockGyms from "./mockGyms"
import Header from "./components/Header"
import  Home  from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProtectedGymIndex from "./pages/ProtectedGymIndex"

import GymEdit from "./pages/GymEdit"
import GymShow from "./pages/GymShow"

const App = (props) => {

  const [gyms, setGyms] = useState(mockGyms)

  useEffect(() => {
    readGyms()
  }, [])
  const readGyms = () => {
    fetch("/gyms")
      .then((response) => response.json())
      .then((payload) => {
        setGyms(payload)
      })
      .catch((error) => console.log(error))
  }

  const updateGym = (gym, id) => {
    console.log("gym:", gym);
    console.log("id:", id);
  }

  return (
    <BrowserRouter>
      
      <Header {...props} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gymindex" element={<GymIndex gyms={gyms} />} />
        <Route path="/protectedgymindex" element={<ProtectedGymIndex gyms={gyms} {...props} />} />
        
        <Route path="/gymedit/:id" element={<GymEdit gyms={gyms} updateGym={updateGym} currentUser={props.current_user} />} />
        
        <Route path="/gymshow/:id"  element={<GymShow gyms={gyms}  />} />
        
      
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}



export default App