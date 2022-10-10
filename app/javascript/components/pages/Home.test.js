import React from "react"
import { render, screen } from "@testing-library/react"
import Home from "./Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"

describe("<Home />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
      )

    const element = screen.getByText(/Welcome to Gym Rat Deals./i)
    expect(element).toBeInTheDocument()
  })

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