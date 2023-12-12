import React, { useState } from "react";
import './registration.css';
import ReactDom from "react-dom";
const RegistrationForm = () => {
    let [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        password: '',
        confirmPassword: '',
    });
    let [isRegistered, setIsRegistered] = useState(false);

    let handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    let handleRegister = () => {
        console.log("User Registered:", formData);
        setIsRegistered(true);
    };

    return (
        <>
            
            <br />
            <div className="div">
            <h2>User Registration Form</h2>
                <form>
                    <label>
                        First Name:
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter First Name" />
                    </label><br />
                    <label>
                        Last Name:
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter Last Name" />
                    </label><br />
                    <label>
                        Email:
                        <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" />
                    </label><br />
                    <label>
                        Contact:
                        <input type="text" name="contact" value={formData.contact} onChange={handleChange} placeholder="Enter Contact" />
                    </label><br />
                    <label>
                        Password:
                        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter Password" />
                    </label><br />
                    <label>
                        Confirm Password:
                        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" />
                    </label><br />
                    <input type="button" name="btn" value="Register" style={{ backgroundColor: 'red', color: 'white' }} onClick={handleRegister} />
                </form>
            </div>
            {isRegistered && (
                <div>
                    <h2>User Details</h2>
                    <p>First Name: {formData.firstName}</p>
                    <p>Last Name: {formData.lastName}</p>
                    <p>Email: {formData.email}</p>
                    <p>Contact: {formData.contact}</p>
                    <p>Password: {formData.password}</p>
                    <p>Confirm Password: {formData.confirmPassword}</p>
                </div>
            )}
        </>
    );
};

export default RegistrationForm;
