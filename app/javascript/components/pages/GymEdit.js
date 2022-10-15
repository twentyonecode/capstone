import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useParams, useNavigate, NavLink } from 'react-router-dom'


const GymEdit = ({ gyms, currentUser, updateGym, deleteGym }) => {
    const navigate = useNavigate()
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
        navigate("/protectedgymindex")
    }
    const handleDelete = () => {
        deleteGym(currentGym.id)
        navigate("/protectedgymindex")

    }

    return (
        <>
            <h2>Edit your gym</h2>
            <Form>
                <FormGroup className= "addText">
                    <Label>gym name</Label>
                    <Input className="input-field" type="text" name="gym_name" onChange={handleChange} value={editGym.gym_name} placeholder="Update your gym name" />
                </FormGroup>
                <FormGroup className= "addText">
                    <Label>store code</Label>
                    <Input className="input-field" type="text" name="store_code" onChange={handleChange} value={editGym.store_code} placeholder="insert store code" />
                </FormGroup>
                <FormGroup className= "addText">
                    <Label>Update Gym Hours</Label>
                    <Input className="input-field" type="text" name="hours_of_operations" onChange={handleChange} values={editGym.hours_of_operations} placeholder="insert hours of operation" />
                </FormGroup>
                <FormGroup className= "addText">
                    <Label>Update Phone number</Label>
                    <Input className="input-field" type="text" name="phone_number" onChange={handleChange} value={editGym.phone_number} placeholder="insert phone number" />
                </FormGroup>
                <FormGroup className= "addText">
                    <Label>Update Features</Label>
                    <Input className="input-field" type="text" name="features" onChange={handleChange} value={editGym.features} placeholder="insert features" />
                </FormGroup>
                <FormGroup className= "addText">
                    <Label>Street</Label>
                    <Input className="input-field" type="text" name="street" onChange={handleChange} value={editGym.street} placeholder="insert street" />
                </FormGroup>
                <FormGroup className= "addText">
                    <Label>City</Label>
                    <Input className="input-field" type="text" name="city" onChange={handleChange} value={editGym.city} placeholder="insert city" />
                </FormGroup>
                <FormGroup className= "addText">
                    <Label>State</Label>
                    <Input className="input-field" type="text" name="state" onChange={handleChange} value={editGym.state} placeholder="insert state" />
                </FormGroup>
                <FormGroup className= "addText">
                    <Label>Update Email</Label>
                    <Input className="input-field" type="text" name="email" onChange={handleChange} value={editGym.email} placeholder="insert email" />
                </FormGroup>
                <FormGroup className= "addText">
                    <Label>Update Deals</Label>
                    <Input className="input-field" type="text" name="deal" onChange={handleChange} value={editGym.deal} placeholder="insert deal" />
                </FormGroup>
                <FormGroup className= "addText">
                    <Label>Update Deal code</Label>
                    <Input className="input-field" type="text" name="deal_code" onChange={handleChange} value={editGym.deal_code} placeholder="insert deal code" />
                </FormGroup>
                <FormGroup className= "addText">
                    <Label>Update or add an Image</Label>
                    <Input className="input-field" type="text" name="image" onChange={handleChange} value={editGym.image} placeholder="insert image" />
                </FormGroup>
                <Button color="warning" onClick={handleSubmit} name="submit" >submit Edit</Button>
                <Button color="danger" onClick={handleDelete} name="delete">delete</Button>
                <NavLink to='/protectedgymindex'>
                    <Button >Cancel</Button>
                </NavLink>
            </Form>
        </>
    )
}

export default GymEdit