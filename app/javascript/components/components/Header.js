import React from "react"
import Navigation from "./Navigation"

const Header = (props) => {
  return (
    <>
      <h1>Gym Rat Deals</h1>
      <Navigation {...props} />
    </>
  )
}

export default Header