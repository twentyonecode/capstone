import React from "react"
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'
import { NavLink } from "react-router-dom"


const GymIndex = ({ gyms }) => {
    console.log("gyms", gyms)
    return (

        <main className="gym-index-cards">
            {gyms?.map((gym, index) => {
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
                                    {gym.name}
                                </CardTitle>
                            </div>
                            <CardText>Likes: {gym.deals}</CardText>
                            <Button color="primary" size="lg">
                                <NavLink to={`/gymshow/${gym.id}`}>
                                    <div className="button-index-see-more">
                                        See more
                                    </div>
                                </NavLink>
                            </Button>
                        </CardBody>
                    </Card>

                )
            })}
        </main>
    )
}
export default GymIndex