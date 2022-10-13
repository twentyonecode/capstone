import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import {useNavigate} from "react-router-dom";

const GymNew = ({ createGym, currentUser }) => {
    const navigate = useNavigate()
    const [submitted, setSubmitted] = useState(false)
    console.log("currentUser", currentUser)
    const [newGym, setNewGym] = useState({
        gym_name: "",
        store_code: "",
        hours_of_operations: "",
        phone_number: "",
        features: "",
        street: "",
        city: "",
        state: "",
        email: "",
        deal: "",
        deal_code: "",
        image: "",
        user_id: currentUser.id
    })
    const handleChange = (e) => {
        setNewGym({ ...newGym, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        createGym(newGym)
        setSubmitted(true)
        navigate("/gymindex")
    }

    return (
        <>
            {/* {submitted ? <Redirect to="/protectedgymindex" /> : null} */}
            <h2>Add a gym</h2>
            <Form>
                <FormGroup>
                    <Label>gym name</Label>
                    <Input type="text" name="gym_name" onChange={handleChange} placeholder="insert gym name" />
                </FormGroup>
                <FormGroup>
                    <Label>store code</Label>
                    <Input type="text" name="store_code" onChange={handleChange} placeholder="insert store code" />
                </FormGroup>
                <FormGroup>
                    <Label>Hours of operation</Label>
                    <Input type="text" name="hours_of_operations" onChange={handleChange} placeholder="insert hours of operation" />
                </FormGroup>
                <FormGroup>
                    <Label>Phone number</Label>
                    <Input type="text" name="phone_number" onChange={handleChange} placeholder="insert phone number" />
                </FormGroup>
                <FormGroup>
                    <Label>Features</Label>
                    <Input type="text" name="features" onChange={handleChange} placeholder="insert features" />
                </FormGroup>
                <FormGroup>
                    <Label>Street</Label>
                    <Input type="text" name="street" onChange={handleChange} placeholder="insert street" />
                </FormGroup>
                <FormGroup>
                    <Label>City</Label>
                    <Input type="text" name="city" onChange={handleChange} placeholder="insert city" />
                </FormGroup>
                <FormGroup>
                    <Label>State</Label>
                    <Input type="text" name="state" onChange={handleChange} placeholder="insert state" />
                </FormGroup>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type="text" name="email" onChange={handleChange} placeholder="insert email" />
                </FormGroup>
                <FormGroup>
                    <Label>Deal</Label>
                    <Input type="text" name="deal" onChange={handleChange} placeholder="insert deal" />
                </FormGroup>
                <FormGroup>
                    <Label>Deal code</Label>
                    <Input type="text" name="deal_code" onChange={handleChange} placeholder="insert deal code" />
                </FormGroup>
                <FormGroup>
                    <Label>Image</Label>
                    <Input type="text" name="image" onChange={handleChange} placeholder="insert image" />
                </FormGroup>

                <Button onClick={handleSubmit} name="submit">submit</Button>

            </Form>
        </>
    )
}

export default GymNew