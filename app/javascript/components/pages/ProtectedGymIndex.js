import React from "react";
import { Card, CardBody, CardTitle, CardText, Button, CardFooter } from "reactstrap";
import { NavLink } from "react-router-dom";

const ProtectedGymIndex = ({ gyms, current_user }) => {
  const filterGyms = gyms?.filter((gym) => gym.user_id === current_user.id);
  return (
    <>
      <h1>My gyms</h1>
      <main className="gym-index-cards">
        {gyms?.map((gym, index) => {
          return (
            <Card
              className="card-light"
              color="dark"
              outline
              style={{
                width: "14rem",
              }}
              key={index}
            >
              <img className="card-light-img" alt="" src={gym.image} />

              <CardBody className="card-body">
                <div>
                  <div className="gym-name">
                    <CardTitle>{gym.gym_name}</CardTitle>
                  </div>
                  <CardText className="card-text">Deal: {gym.deal}</CardText>
                </div>
                  <Button className="down-button" size="sm">
                    <NavLink to={`/gymshow/${gym.id}`}>
                      <div className="button-index-see-more">view your gym</div>
                    </NavLink>
                  </Button>
                  <Button size="sm">
                    <NavLink to={`/gymedit/${gym.id}`}>
                      <div className="button-index-see-more">
                        Update your gym
                      </div>
                    </NavLink>
                  </Button>
                
              </CardBody>
            </Card>
          );
        })}
      </main>
    </>
  );
};
export default ProtectedGymIndex;
