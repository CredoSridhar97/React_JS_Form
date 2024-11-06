import React, { useState } from "react";
import validator from "validator";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [errors, setErrors] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!name) {
      errors.name = "Name is required";
    }

    if (!validator.isEmail(email)) {
      errors.email = "Email is invalid";
    }

    if (!validator.isMobilePhone(phone)) {
      errors.phone = "Phone number is invalid";
    }

    if (!validator.isStrongPassword(password)) {
      errors.password = "Password is weak";
    }

 

    if (Object.keys(errors).length === 0) {
      alert("Form submitted successfully!");
    } else {
      setErrors(errors);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          {errors.name && <span>{errors.name}</span>}
        </label> <br/>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <span>{errors.email}</span>}
        </label> <br/>
        <label>
          Phone Number:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          {errors.phone && <span>{errors.phone}</span>}
        </label> <br/>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {errors.password && <span>{errors.password}</span>}
        </label> <br/>
        <label>
          City:
          <select value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="">Select a city</option>
            <option value="new-york">Indian</option>
            <option value="indian">New York</option>
          </select>
          {errors.city && <span>{errors.city}</span>}
        </label> <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;