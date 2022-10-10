import React, {useState} from "react"
import GymIndex from "./pages/GymIndex"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import mockGyms from "./mockGyms"
import Header from "./components/Header"
import  Home  from "./pages/Home"
import NotFound from "./pages/NotFound"
import GymNew from "./pages/GymNew"

const App = (props) => {

  const [gyms, setGyms] = useState(mockGyms)

  // useEffect(() => {
  //   readGyms()
  // }, [])
  // const readGyms = () => {
  //   fetch("/gyms")
  //     .then((response) => response.json())
  //     .then((payload) => {
  //       setGyms(payload)
  //     })
  //     .catch((error) => console.log(error))
  // }

  const createGym = (gym) => {
    console.log("this is a flag", gym)
    fetch("/gyms", {
      body: JSON.stringify(gym),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(payload => setGyms(payload))
    .catch(errors => console.log(errors))
  }

  return (
    <BrowserRouter>
      
      <Header {...props} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gymindex" element={<GymIndex gyms={gyms} />} />

        <Route path="/gymnew" element={<GymNew createGym={createGym} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App