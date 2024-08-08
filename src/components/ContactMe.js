import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactMe() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Clear previous messages
        setSuccessMessage("");
        setErrorMessage("");

      
        emailjs.send(
            'service_helqefl',
            'template_rgcwz9l',
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_email: 'panthaadarsha0@gmail.com' 
            }, 
            'SA00qhWbrf7TmJAtL'
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setSuccessMessage("Message sent successfully!");

         
            setFormData({
                name: "",
                email: "",
                message: ""
            });

           
            setTimeout(() => {
                setSuccessMessage("");
            }, 3000);
        }, (err) => {
            console.log('FAILED...', err);
            setErrorMessage("Failed to send message. Please try again.");

            
            setTimeout(() => {
                setErrorMessage("");
            }, 3000);
        });
    };

    return (
        <div className="divContact">
            <div className="formDiv">
                <h2>Contact Me</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        className="input"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="input"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        className="input"
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className="button">Send</button>
                </form>
                {successMessage && <p className="successMessage">{successMessage}</p>}
                {errorMessage && <p className="errorMessage">{errorMessage}</p>}
            </div>
        </div>
    );
}
