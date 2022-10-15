import React from 'react'
import { Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    
    <div>
        <h1>Welcome to Gym Rat Deals!</h1>
         <p>A place to list or get the best fitness deals in town.</p>
        
      <div>
        <Button className = "box"
          size="lg">
          <NavLink to={'/gymindex'} >
            <div className = "home-see-deal-button">Click For Deals!</div>
          </NavLink>
        </Button>
       <h2>Before you trim the fat, Save money with Gym Rat!</h2>
      <div>
        <img src ="/GRDlogo.png" className="Logo" alt="Logo"></img>
      </div>
      </div>
    </div>


      )
}

      export default Home