import React from "react"
import { render, screen } from "@testing-library/react"
import GymShow from "./GymShow"
import { MemoryRouter, Routes, Route } from "react-router-dom"

const gyms = [
    {
        gym_name: "banana",
        store_code: "",
        hours_of_operations: "",
        phone_number: "",
        features: "",
        street: "",
        city: "",
        state: "",
        email: "",
        deal: "",
        deal_code: "",
        image: "",
        user_id: 1,
        id: 1
    }
]

const renderComponent = () => {
    render(
       <MemoryRouter initialEntries={["/gymshow/1"]}>
          <Routes>
             <Route path="/gymshow/:id" element={<GymShow gyms={gyms}/>} />
          </Routes>
       </MemoryRouter>
    )
 }
 describe('GymShow', () => {
    it("render a card with gym details", ()=>{
       renderComponent()
       expect(screen.getByText(`${gyms[0].gym_name}`)).toBeInTheDocument()
    })
 })