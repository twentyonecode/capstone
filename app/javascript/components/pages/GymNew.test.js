import React from "react"
import { render, screen } from "@testing-library/react"
import GymNew from "./GymNew"
import { BrowserRouter, Route, Routes } from "react-router-dom"

// describe("<GymNew />", () => {
//     it("renders without crashing", () => {
//         render(<GymNew />)
//         it("checks a header", () => {
//             render(
//                 <BrowserRouter>
//                     <Routes>
//                         <Route path="/gymnew" element={<GymNew createGym={createGym} currentUser={props.current_user} />} />
//                     </Routes>
//                 </BrowserRouter>
//             )
//             const showLink = screen.getByText(/Add a gym/i)
//             expect(showLink).toBeInTheDocument()
//         })
//     })
// })

describe("<GymNew />", () => {
    it("renders without crashing", ({createGym, props}) => {
        render(
            <BrowserRouter>
                <Routes>
                <Route path="/gymnew" element={<GymNew createGym={createGym} currentUser={props.current_user} />} />
                </Routes>
            </BrowserRouter>
        )

        const element = screen.getByText(/Add a gym/i)
        expect(element).toBeInTheDocument()
    })
})