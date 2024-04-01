const emailjs = require('emailjs-com');

const sendEmail = (toEmail, subject, message) => {
    const templateParams = {
        to_email: toEmail,
        subject: subject,
        message: message
    };

    
    emailjs.send('<YOUR_SERVICE_ID>', '<YOUR_TEMPLATE_ID>', templateParams, '<YOUR_USER_ID>')
        .then((response) => {
            console.log('Email sent successfully:', response);
        })
        .catch((error) => {
            console.error('Email failed to send:', error);
        });
};