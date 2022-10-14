import { screen, render } from "@testing-library/react"
import NotFound from './NotFound'
import React from 'react'


describe("<NotFound />", () => {
    it("renders without error", () => {
    render(<NotFound />) 
    const element = screen.getByText("Page Not Found")
    expect(element).toBeInTheDocument()
    })

    it("checks for instructions to return to home", () => {
        render(<NotFound />) 
        const element = screen.getByText("Hey Gym Rat! There are no deals on this page.")
        expect(element).toBeInTheDocument()
        })
})