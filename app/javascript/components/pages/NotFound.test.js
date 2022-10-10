import { screen, render } from "@testing-library/react"
import NotFound from './NotFound'
import React from 'react'


describe("<NotFound />", () => {
    it("renders without error", () => {
    render(<NotFound />) 
    const element = screen.getByText("Not Found")
    expect(element).toBeInTheDocument()
    })
})