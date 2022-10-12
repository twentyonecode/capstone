import React from 'react'
import { Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    
    <div>
        <h1>Welcome to Gym Rat Deals!</h1>
        <h2>Before you trim the fat, Save money with Gym Rat!</h2>
      <div>
        <Button className = "box"
          size="lg">
          <NavLink to={'/gymindex'} >
            <div className = "home-see-deal-button">Click For Deals!</div>
          </NavLink>
        </Button>
        <p>A place to list or get the best fitness deals in town.</p>
      <div>
        <img src ="https://i.ibb.co/zVycnj1/Gym-Rat-deals.png"></img>
        <p>Save money, lift better!</p>
      </div>
      </div>
    </div>


      )
}

      export default Home