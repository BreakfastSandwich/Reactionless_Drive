import React from "react";
import ContactCSS from '../style/contact.module.css'
import { useState } from 'react';


function Contact() {
 
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');

  const handleNameInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === 'Name' ? setName(value) : alert(`Please provide your Name`);
  };

  const handleEmailInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { email, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return email === 'Email' ? setEmail(value) : alert(`Please provide your Email`);
  };

  const handleMessageInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { message, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return message === 'Message' ? setEmail(value) : alert(`Please provide your Email`);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${Name}, we will contact you shortly`);
    setName('');
    setEmail('');
    setMessage('');
  };


 
    return (
      <div>
        <h1>Contact Page</h1>
        <p>
          <div className="container text-center">
             <form className="form" onSubmit={handleFormSubmit}>
              <input
                value={Name}
                name="Name"
                onChange={handleNameInputChange}
                type="text"
                placeholder="Name"
              />
              <input
                value={Email}
                name="Email"
                onChange={handleEmailInputChange}
                type="text"
                placeholder="Email"
              />
              <input
                value={Message}
                name="Message"
                onChange={handleMessageInputChange}
                type="text"
                placeholder="Message"
              />
              <button type="submit">
                Submit
              </button>
            </form> 
          </div>

        </p>
      </div>
    );
  }

 export default Contact;