import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EmailVerification = () => {
    const { token } = useParams();
    const [message, setMessage] = useState('');

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const response = await axios.post('/api/auth/verify-email', { token });
                setMessage(response.data.message);
            } catch (error) {
                setMessage('Email verification failed. Please try again.');
            }
        };

        verifyEmail();
    }, [token]);

    return (
        <div className="email-verification">
            <h2>Email Verification</h2>
            <p>{message}</p>
        </div>
    );
};

export default EmailVerification;