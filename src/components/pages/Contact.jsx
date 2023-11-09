import React from "react";
import ContactCSS from '../style/contact.module.css'
import { useState } from 'react';


function Contact() {
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameInputChange = (e) => {
       const { name, value } = e.target;
       console.log(name)
    
    return name === 'Name' ? setName(value) : alert(`Please provide your Name`);
  };

  // const handleEmailInputChange = (e) => {
  //    console.log(e.target) 
  //    const { email, value } = e.target;
      
  //     console.log(email)

  
  //   return email === 'Email' ? setEmail(value) : alert(`Please provide your Email`);
  // };

  // const handleMessageInputChange = (e) => {
  //   const { message, value } = e.target;

  //   return message === 'Message' ? setEmail(value) : alert(`Please provide your Email`);
  // };

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
                onChange={handleNameInputChange}
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