import React from "react"
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'
import { NavLink } from "react-router-dom"
// need to add this file in the navigation file and also include the features for editing your gyms on this file.
//also this requires a route path in the app.js

const ProtectedGymIndex = ({ gyms, current_user }) => {
    const filterGyms = gyms?.filter(gym => gym.user_id === current_user.id)
    return (
        <>
            <h1>My gyms</h1>
            <main className="gym-index-cards">
                {filterGyms?.map((gym, index) => {
                    return (
                        <Card
                            color="dark"
                            outline
                            style={{
                                width: '14rem'
                            }}
                            key={index}
                        >
                            <img
                                alt=""
                                src={gym.image}
                            />
                            <CardBody>
                                <div className="gym-name">
                                    <CardTitle>
                                        {gym.gym_name}
                                    </CardTitle>
                                </div>
                                <CardText>Deal: {gym.deal}</CardText>
                                <Button color="primary" size="lg">
                                    <NavLink to={`/gymshow/${gym.id}`}>
                                        <div className="button-index-see-more">
                                            claim your deal
                                        </div>
                                    </NavLink>
                                </Button>
                                <Button color="primary" size="lg">
                                    <NavLink to={`/gymedit/${gym.id}`}>
                                        <div className="button-index-see-more">
                                            Update your gym
                                        </div>
                                    </NavLink>
                                </Button>
                            </CardBody>
                        </Card>

                    )
                })}
            </main>
        </>
    )
}
export default ProtectedGymIndex