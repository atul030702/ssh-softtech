"use client";

import { useState } from 'react';

import { POST_URL } from '@/utils/constants';

const useSendFormData = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
    
    async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const rawData = Object.fromEntries(new FormData(form));

        const apiData = {
            name: rawData.fullName,
            email: rawData.email,
            phone: rawData.phone ?? '',
            subject: rawData.requirement ?? `Company Name: ${rawData.company}`,
            description: rawData.message,
        };

        try {
            setLoading(true);
            setStatus({ type: null, message: '' });

            const response = await fetch(POST_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(apiData),
            });

            if (!response.ok) throw new Error('Submission failed');

            setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
            form.reset();

        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus({ type: 'error', message: 'There was an error sending your message. Please try again.' });
        } finally {
            setLoading(false);
        }
    }

    return { loading, status, setStatus, handleFormSubmit };
};

export default useSendFormData;