import React from "react"
import { render, screen } from "@testing-library/react"
import GymNew from "./GymNew"
import { BrowserRouter } from "react-router-dom"

describe("<GymNew />", () => {
    it("renders without crashing", () => {
        render(<GymNew />)
    it("checks for welcome message", () => {
            render(
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            )

            const showLink = screen.getByText(/Welcome to Gym Rat Deals./i)
            expect(showLink).toBeInTheDocument()
        })
    }) 