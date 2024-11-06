import React, { useState } from "react";
import validator from "validator";

export default function FormProgram(){

const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log(formData);
      alert(`Name - ${formData.name} Email - ${formData.email} Phone - ${formData.phone} - Sucessfully Data Saved`)
    }
  };

  const isFormValid = () => {
    let errors = {};
    let isValid = true;
  
    // Validate name field
    if (validator.isEmpty(formData.name)) {
      errors.name = "Name is required";
    }
  
    // Validate email field
    if (!validator.isEmail(formData.email)) {
      errors.email = "Invalid email address";
    }
  
    // Validate phone field
    if (!validator.isMobilePhone(formData.phone)) {
      errors.phone = "Invalid phone number";
    }
  
    // Validate password field
    if (validator.isEmpty(formData.password)) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
  
    setFormErrors(errors);
    return isValid;
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {formErrors.name && <p>{formErrors.name}</p>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {formErrors.email && <p>{formErrors.email}</p>}
      </div>
      <div>
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        {formErrors.phone && <p>{formErrors.phone}</p>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {formErrors.password && <p>{formErrors.password}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
          