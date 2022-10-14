import React from "react"
import { Card, CardBody, CardText, CardTitle, Button } from 'reactstrap'
import { useParams, NavLink } from "react-router-dom"


const GymShow = ({ gyms }) => {
    const { id } = useParams()
    const currentGym = gyms?.find(gym => gym.id === +id)

    return (
        <div className="card-midi">
            <Card color="dark" outline style={{ width: '50rem' }}>
                <img alt="" src={currentGym.image} />
                <CardBody>
                    <div className="gym-name">
                        <CardTitle>
                            {currentGym.gym_name}
                        </CardTitle>
                    </div>

                    <CardText>Store Code: {currentGym.store_code}</CardText>
                    <CardText>Hours: {currentGym.hours_of_operations}</CardText>
                    <CardText>Phone: {currentGym.phone_number}</CardText>
                    <CardText>Features: {currentGym.features}</CardText>
                    <CardText>Street: {currentGym.street}</CardText>
                    <CardText>City: {currentGym.city}</CardText>
                    <CardText>State: {currentGym.state}</CardText>
                    <CardText>Email: {currentGym.email}</CardText>
                    <CardText>Deals: {currentGym.deal}</CardText>
                    <CardText>Code: {currentGym.deal_code}</CardText>
                    <Button size="lg">
                        <NavLink to='/gymindex'>
                            <div className="button-index-see-more">
                                Return to deals!
                            </div>
                        </NavLink>
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default GymShow