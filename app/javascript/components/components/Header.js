import React from "react"
import Navigation from "./Navigation"

const Header = (props) => {
  return (
    <>
      <h2>Gym Rat Deals</h2>
      <Navigation {...props} />
    </>
  )
}

export default Header