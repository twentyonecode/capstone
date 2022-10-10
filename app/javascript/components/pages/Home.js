import React from 'react'
import { Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (

    <div>
    <h1>Welcome to Gym Rat Deals.</h1>
      <p>Save money, lift better!</p>
      <p>A place to list or get the best fitness deals in town.</p>
      <div>
        <Button
          color="primary"
          size="lg">
          <NavLink to={'/gymindex'} >
            See the deals!
          </NavLink>
        </Button>
      </div>
    </div>

      )
}

      export default Home