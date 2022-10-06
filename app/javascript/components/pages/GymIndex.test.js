import React from "react"
import { render } from "@testing-library/react"
import GymIndex from "./GymIndex"

describe("<GymIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<GymIndex />, div)
  })
})