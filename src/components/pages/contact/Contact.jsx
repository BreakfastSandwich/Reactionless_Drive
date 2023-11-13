import React from "react";
import ContactCSS from './contact.module.css'
import { useState } from 'react';


function Contact() {
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
   
    
    if(name === 'Name') {
     return setName(value);
    } else if(name === 'Email') {
     return setEmail(value);
    } else {
     return setMessage(value);
    }
 

};

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${name}, we will contact you shortly at ${email}`);
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
                onChange={handleInputChange}
                type="text"
                placeholder="Name"
              />
              <input
                value={Email}
                name="Email"
                onChange={handleInputChange}
                type="text"
                placeholder="Email"
              />
              <input
                value={Message}
                name="Message"
                onChange={handleInputChange}
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