import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        const service_id = 'service_vjf2jzs';
        const template_id = 'template_qn63pae';
        const p_key = 'ybh7qYVPbGjALJ28O';
        e.preventDefault();
        emailjs.send(service_id, template_id, formData, p_key)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Form submitted successfully!');
                setIsSubmitted(true);
            }, (err) => {
                console.log('FAILED...', err);
                alert('Form submission failed. Please try again.');
            });

        setTimeout(() => {
            setFormData({ name: '', email: '', subject: '', message: '' });
            setIsSubmitted(false);
        }, 3000);
    };

    return (
        <div className='contacts'>
            <div className='contactWrapper'>
                <h1>Get In Touch</h1>

                <div className='contactContainer'>
                    {/* Contact Info */}
                    <div className='contactInfo'>
                        <p className='contactSubtitle'>Have a question or want to work together? I'd love to hear from you.</p>
                        <div className='infoItem'>
                            <h3>Email</h3>
                            <p><a href="mailto:khatiwodautsab22@gmail.com">khatiwodautsab22@gmail.com</a></p>
                        </div>
                        <div className='infoItem'>
                            <h3>Location</h3>
                            <p>Kathmandu, Nepal</p>
                        </div>
                    </div>

                    <form className='contactForm' onSubmit={handleSubmit}>
                        <div className='formGroup'>
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                            />
                        </div>

                        <div className='formGroup'>
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className='formGroup'>
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                placeholder="Project Inquiry"
                            />
                        </div>

                        <div className='formGroup'>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Your message here..."
                                rows="5"
                            />
                        </div>

                        <button type="submit" className='submitBtn'>
                            {isSubmitted ? 'Message Sent! 🎉' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact