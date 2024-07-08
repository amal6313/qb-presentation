import React, { useState } from 'react';
import './contactus.css';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email address is invalid';
        }
        if (!formData.message) errors.message = 'Message is required';
        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitted(true);
            // You can send formData to your backend here
        }
    };

    return (
        <div className="contact-us-container">
            <h1>Contact Us</h1>
            {isSubmitted ? (
                <div className="success-message">Thank you for contacting us!</div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.name ? 'error' : ''}
                        />
                        {errors.name && <div className="error-message">{errors.name}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? 'error' : ''}
                        />
                        {errors.email && <div className="error-message">{errors.email}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={errors.message ? 'error' : ''}
                        ></textarea>
                        {errors.message && <div className="error-message">{errors.message}</div>}
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            )}
        </div>
    );
}

export default ContactUs;
