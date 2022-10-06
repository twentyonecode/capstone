import React, {useState} from "react"
import Header from "./components/Header"
import GymIndex from "./pages/GymIndex"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import mockGyms from "./mockGyms"

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

  return (
    <BrowserRouter>
      <Header {...props} />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/gymindex" element={<GymIndex gyms={gyms} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
