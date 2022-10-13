import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useParams, useNavigate, NavLink } from 'react-router-dom'


const GymEdit = ({ gyms, currentUser, updateGym, deleteGym }) => {
    console.log("currentUser", currentUser)
    const { id } = useParams()
    const currentGym = gyms?.find(gym => gym.id === +id)

    const [editGym, setEditGym] = useState(
        {
            gym_name: currentGym.gym_name,
            store_code: currentGym.store_code,
            hours_of_operations: currentGym.hours_of_operations,
            phone_number: currentGym.phone_number,
            features: currentGym.features,
            street: currentGym.street,
            city: currentGym.city,
            state: currentGym.state,
            email: currentGym.email,
            deal: currentGym.deal,
            deal_code: currentGym.deal_code,
            image: currentGym.image,
            user_id: currentUser.id
        }
    )
    const handleChange = (e) => {
        setEditGym({ ...editGym, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
        updateGym(editGym, currentGym.id)
    }
    const handleDelete = () => {
        deleteGym(currentGym.id)
        // navigate("/protectedgymindex)
        console.log(currentGym.id)
    }

    return (
        <>
            <h2>Edit your gym</h2>
            <Form>
                <FormGroup>
                    <Label>gym name</Label>
                    <Input type="text" name="gym_name" onChange={handleChange} value={editGym.gym_name} placeholder="Update your gym name" />
                </FormGroup>
                <FormGroup>
                    <Label>store code</Label>
                    <Input type="text" name="store_code" onChange={handleChange} value={editGym.store_code} placeholder="insert store code" />
                </FormGroup>
                <FormGroup>
                    <Label>Update Gym Hours</Label>
                    <Input type="text" name="hours_of_operations" onChange={handleChange} values={editGym.hours_of_operations} placeholder="insert hours of operation" />
                </FormGroup>
                <FormGroup>
                    <Label>Update Phone number</Label>
                    <Input type="text" name="phone_number" onChange={handleChange} value={editGym.phone_number} placeholder="insert phone number" />
                </FormGroup>
                <FormGroup>
                    <Label>Update Features</Label>
                    <Input type="text" name="features" onChange={handleChange} value={editGym.features} placeholder="insert features" />
                </FormGroup>
                <FormGroup>
                    <Label>Street</Label>
                    <Input type="text" name="street" onChange={handleChange} value={editGym.street} placeholder="insert street" />
                </FormGroup>
                <FormGroup>
                    <Label>City</Label>
                    <Input type="text" name="city" onChange={handleChange} value={editGym.city} placeholder="insert city" />
                </FormGroup>
                <FormGroup>
                    <Label>State</Label>
                    <Input type="text" name="state" onChange={handleChange} value={editGym.state} placeholder="insert state" />
                </FormGroup>
                <FormGroup>
                    <Label>Update Email</Label>
                    <Input type="text" name="email" onChange={handleChange} value={editGym.email} placeholder="insert email" />
                </FormGroup>
                <FormGroup>
                    <Label>Update Deals</Label>
                    <Input type="text" name="deal" onChange={handleChange} value={editGym.deal} placeholder="insert deal" />
                </FormGroup>
                <FormGroup>
                    <Label>Update Deal code</Label>
                    <Input type="text" name="deal_code" onChange={handleChange} value={editGym.deal_code} placeholder="insert deal code" />
                </FormGroup>
                <FormGroup>
                    <Label>Update or add an Image</Label>
                    <Input type="text" name="image" onChange={handleChange} value={editGym.image} placeholder="insert image" />
                </FormGroup>
                <Button onClick={handleSubmit} name="submit" >submit Edit</Button>
                <Button onClick={handleDelete} name="delete">delete</Button>
            </Form>
        </>
    )
}

export default GymEdit