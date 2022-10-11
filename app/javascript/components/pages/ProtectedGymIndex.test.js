import React from "react"
import { render, screen } from "@testing-library/react"
import ProtectedGymIndex from "./ProtectedGymIndex"
import { BrowserRouter } from "react-router-dom"
import { element } from "prop-types"
import { Button, CardBody } from "reactstrap"

describe("<ProtectedGymIndex />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        render(<ProtectedGymIndex />, div)
    })
    it("checks for presence of card", () => {
        const card = document.createElement("CardBody")
        render(<ProtectedGymIndex />, CardBody)
    })
    it("renders the header without crashing", () => {
        render(<ProtectedGymIndex />)
        const element = screen.getByText(/My gyms/i)
        expect(element).toBeInTheDocument()
    })
    it("renders claims your deals button", () => {
        render(<ProtectedGymIndex />)
        const element = screen.getByRole("main")
        expect(element).toBeInTheDocument()
    })
})



