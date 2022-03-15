import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import { useState } from "react";


export const Forms = () => {
    const [formData, setFormData] = useState({
        username: "",
        age: "",
        address: "",
        department: "",
        salary: "",
        marital_state: "",

    })

    const handleChange = (e) => {
        const {id, value} = e.target;
        console.log(e.target)
        setFormData({
            ...formData,
            [id]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        axios.post("http://localhost:3001/users", formData).then (() => {
            alert("User created succussfully");

            // setFormData({
            //     username: "",
            //     age: "",
            //     address: "",
            //     department: "",
            //     salary: "",
            //     marital_state: "",
    
            // });
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <h3>Enter Employee Details</h3>
            <label>Name: </label>        
            <input value = {formData.username} id = "username" type = "text" onChange={handleChange} placeholder="enter name" /><br/>
            <label>Age: </label>        
            <input value = {formData.age} id = "age" type = "number" onChange={handleChange} placeholder="enter age"/><br/>
            <label>Address: </label>        
            <input value = {formData.address} id = "address" type = "address" onChange={handleChange} placeholder="enter address"/><br/>
            <label>Department: </label>        
            <select id = "department" onChange={handleChange}>
                <option></option>
                <option value="Development">Development</option>
                <option value="Research">Research</option>
                <option value="Testing">Testing</option>
            </select>
            <br/>
            <label>Salary: </label>        
            <input value = {formData.salary} id = "salary" type = "number" onChange={handleChange} placeholder="enter salary"/><br/>
            <label>Marital State: </label>        
            <input value = {"married"} id = "marital_state" type = "checkbox" onChange={handleChange} /><br/>        
            <input type = "submit" value = "Create user"/><br/>

        </form>
    )
}