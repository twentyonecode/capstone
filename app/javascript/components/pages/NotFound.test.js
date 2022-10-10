import { screen, render } from "@testing-library/react"
import NotFound from './NotFound'
import React from 'react'


describe("<NotFound />", () => {
    it("renders without error", () => {
    render(<NotFound />) 
    const element = screen.getByText("Not Found")
    expect(element).toBeInTheDocument()
    })

    it("checks for instructions to return to home", () => {
        render(<NotFound />) 
        const element = screen.getByText("Hey! We are sorry the page you are looking for does not exist! Please click Home at the top of the page to return back and see better deals!")
        expect(element).toBeInTheDocument()
        })
})