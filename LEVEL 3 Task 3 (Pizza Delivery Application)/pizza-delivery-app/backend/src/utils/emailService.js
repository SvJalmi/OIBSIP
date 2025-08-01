const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service
    auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
    },
});

const sendVerificationEmail = (to, verificationLink) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject: 'Email Verification',
        html: `<p>Please verify your email by clicking on the following link:</p><a href="${verificationLink}">Verify Email</a>`,
    };

    return transporter.sendMail(mailOptions);
};

const sendOrderNotification = (to, orderDetails) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject: 'Order Confirmation',
        html: `<p>Your order has been placed successfully!</p><p>Order Details: ${orderDetails}</p>`,
    };

    return transporter.sendMail(mailOptions);
};

module.exports = {
    sendVerificationEmail,
    sendOrderNotification,
};