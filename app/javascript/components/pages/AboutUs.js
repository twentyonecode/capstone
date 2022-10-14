import React from "react";
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem, CardLink } from 'reactstrap'


const AboutUs = () => {
    return(
        <main className="gym-index-cards">
        <Card style={{ width: '18rem'}} >

        <img alt="Card" 
        src="https://i.ibb.co/G2DJkWW/CA678536-11-D9-4540-92-FD-DB12-C68-AAB47.jpg"/>

        <CardBody>
            <CardTitle className="gym-name">
                Francisco Solis
            </CardTitle>

            <CardText>
                Tech Lead
            </CardText>
        </CardBody>

        <ListGroup flush>
            <ListGroupItem>
                Father of 2 girls
            </ListGroupItem>
            <ListGroupItem>
                A Gym Rat
            </ListGroupItem>
            <ListGroupItem>
            <a href="https://francisco-solis-219.netlify.app/"> Portfolio</a>
            </ListGroupItem>
        </ListGroup>
        </Card>

        <Card style={{ width: '18rem'}}>

        <img alt="Card" 
        src="https://picsum.photos/300/200"/>

        <CardBody>
            <CardTitle className="gym-name">
                Brook Williams
            </CardTitle>

            <CardText>
                Design Lead
            </CardText>
        </CardBody>

        <ListGroup flush>
            <ListGroupItem>
                "Brook The Coder"
            </ListGroupItem>
            <ListGroupItem>
                Jamming and Skating
            </ListGroupItem>
            <ListGroupItem>
            <a href="https://brookthecoder.com/"> Portfolio</a>
            </ListGroupItem>
        </ListGroup>
        </Card>

        <Card style={{ width: '18rem'}}>

        <img alt="Card" 
        src="https://picsum.photos/300/200"/>

        <CardBody>
            <CardTitle className="gym-name">
                Tuan Le 
            </CardTitle>

            <CardText>
                Project Manager
            </CardText>
        </CardBody>

        <ListGroup flush>
            <ListGroupItem>
                Debuggin is his passion[he says..]
            </ListGroupItem>
            <ListGroupItem>
                Movie buff
            </ListGroupItem>
            <ListGroupItem>
            <a href="https://tuanlevietz.github.io/Portfolio/"> Portfolio</a>
            </ListGroupItem>
        </ListGroup>
        </Card>

        <Card style={{ width: '18rem'}}>

        <img src="https://i.ibb.co/sVj4rhZ/20221014-095951-2.jpg"/>

        <CardBody>
            <CardTitle  className="gym-name">
                Hieu Huu Le 
            </CardTitle>

            <CardText>
                Product Manager
            </CardText>
        </CardBody>

        <ListGroup flush>
            <ListGroupItem>
                Fish Sauce Smuggler
            </ListGroupItem>
            <ListGroupItem>
                Bachata Dancer
            </ListGroupItem>
            <ListGroupItem>
                <a href="https://hieuhuule.github.io"> Portfolio</a>
            </ListGroupItem>
        </ListGroup>
        </Card>


                </main>
    )
}

export default AboutUs
{/* <Card className="card-style-index"
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
                            <CardText>Deal: {gym.deal}</CardText>
                        </CardBody>
                    </Card>
                     */}