import React from "react"
import { render, screen } from "@testing-library/react"
import GymEdit from "./GymEdit"
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom"

describe("<GymEdit />", () => {
    const updateGym = () => { }
    const currentUser = { id: 1 }
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
    it("renders without crashing", () => {
        console.log("gyms", gyms)
        render(
            <MemoryRouter initialEntries={["/gymedit/1"]}>
                <Routes>
                    <Route path="/gymedit/:id" element={<GymEdit updateGym={updateGym} gyms={gyms} currentUser={currentUser} />} />
                </Routes>
            </MemoryRouter>
        )
        const element = screen.getByText(/Edit your gym/i)
        expect(element).toBeInTheDocument()
    })
})
