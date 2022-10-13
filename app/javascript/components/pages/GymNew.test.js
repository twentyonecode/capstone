import React from "react"
import { render, screen } from "@testing-library/react"
import GymNew from "./GymNew"
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom"

describe("<GymNew />", () => {
    const createGym = () =>{}
    const current_user = {id: 1}
    it("renders without crashing", () => {
        render( 
        <MemoryRouter initialEntries={["/gymnew"]}>
            <Routes>
            <Route path="/gymnew" element=
            {<GymNew createGym={createGym} currentUser={current_user} />}/>
            </Routes>
        </MemoryRouter>
        )

        const element = screen.getByText(/Add a gym/i)
    
        expect(element).toBeInTheDocument()
    })

    it("renders the input field of gym name", () => {
        render(
        <MemoryRouter initialEntries={["/gymnew"]}>
            <Routes>
            <Route path="/gymnew" element=
            {<GymNew createGym={createGym} currentUser={current_user} />}/>
            </Routes>
        </MemoryRouter>
        )

        const element = screen.getByText(/gym name/i)
    
        expect(element).toBeInTheDocument()
    })
})