// import React from "react"
// import { render, screen } from "@testing-library/react"
// import { MemoryRouter, Route, Routes } from "react-router-dom"
// import GymShow from "./GymShow"
// import gyms from "../mockGyms"


// const renderComponent = () => {
// render(
//     <MemoryRouter initialEntries={["/gymshow/1"]}>
//     <Routes>
//     <Route path="/gymshow/:id"  element={<GymShow gyms={gyms}  />} />
//     </Routes>
//     </MemoryRouter>
// )
// } 
// describe('gymshow', () => { 
//     it("render a card with entire info", ()=>{
//       renderComponent()
//       screen.debug()
//       expect(screen.getByText(`${gyms[0].gym_name}`)).toBeInTheDocument()
//     })
//  })