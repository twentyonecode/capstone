import React, { useEffect } from "react"
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'
import { NavLink } from "react-router-dom"


const GymIndex = ({ gyms }) => {
    return (
        <>
            <h1>Deals</h1>
            <main className="gym-index-cards">
                {gyms?.map((gym, index) => {
                    return (
                        <Card className="card-style-index"
                            color="dark"
                            outline
                            style={{
                                width: '14rem'

                            }}
                            key={index}
                        >
                            <img className="card-light-img"
                                alt=""
                                src={gym.image}
                            />
                            <CardBody>
                                <div className="gym-name">
                                    <CardTitle>
                                        {gym.gym_name}
                                    </CardTitle>
                                </div>
                            </CardBody>

                            <CardBody>
                                <CardText>Deal: {gym.deal}</CardText>
                            </CardBody>

                            <CardBody>
                                <Button size="lg">
                                    <NavLink to={`/gymshow/${gym.id}`}>
                                        <div className="button-index-see-more">
                                            claim your deal
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

export default GymIndex