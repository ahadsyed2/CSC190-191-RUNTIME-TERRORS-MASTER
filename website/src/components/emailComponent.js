import React, { useState } from 'react';
import axios from 'axios';

const EmailForm = () => {
    const [toEmail, setToEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/send-email', {
            toEmail: toEmail,
            subject: subject,
            message: message
        })
        .then((response) => {
            console.log('Email sent successfully:', response.data);
        })
        .catch((error) => {
            console.error('Failed to send email:', error);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={toEmail} onChange={(e) => setToEmail(e.target.value)} placeholder="To Email" />
            <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message"></textarea>
            <button type="submit">Send Email</button>
        </form>
    );
};

export default EmailForm;