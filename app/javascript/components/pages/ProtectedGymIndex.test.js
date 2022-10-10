import React from "react"
import { render } from "@testing-library/react"
import ProtectedGymIndex from "./ProtectedGymIndex"

describe("<ProtectedGymIndex />", () => {
    it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<ProtectedGymIndex />, div)
    })

    it("checks for the h1 tag", () => {
    const h1 = document.createElement("h1")
    render(<ProtectedGymIndex />, h1) 
    })
})

