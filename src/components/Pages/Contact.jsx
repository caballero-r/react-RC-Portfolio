// Import required
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import validateEmail from '../../utils/helpers';

// Contact Form component
function ContactForm () {
    // Use state to keep track of what is being typed into the form
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errormessage, setErrormessage] = useState('');

    // Handle input change
    function handleInputChange (e) {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'message') {
            setMessage(inputValue);
        } else {
            setErrormessage(errormessage);
        }
    }

    // Handle form submit
    function handleFormSubmit (e) {
        e.preventDefault();

        if (!validateEmail(email) || !name ) {
            setErrormessage('Invalid email or name');
            return;
        } 
        
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div className='container text-center'>
            <h1>Contact Me</h1>
            <h5>Fill in the information below to contact me</h5>
            <form>
                <div className="row justify-content-md-center mb-2">
                    <input
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Please Enter Your Name"
                    />
                </div>
                <div className="row justify-content-md-center mb-2">   
                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Please Enter Your Email"
                    />
                </div>
                <div className="row justify-content-md-center mb-2">      
                    <textarea
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Please Type Your Message Here"
                    />
                </div>
                <div className="col-12">
                {errormessage && (
                    <div>
                        <p className="error-text">{errormessage}</p>
                    </div>
                )}
                    <Button variant="primary" type="submit" onClick={handleFormSubmit}>
                        Submit
                    </Button>
                </div>
            </form>    
        </div>
    );
}

export default ContactForm;