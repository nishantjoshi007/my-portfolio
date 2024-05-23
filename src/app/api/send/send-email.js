// pages/api/send-email.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { to, subject, text } = req.body;

        if (!to || !subject || !text) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const transporter = nodemailer.createTransport({
            service: 'Resend',
            auth: {
                user: 'api', // User for the email service, if required
                pass: process.env.RESEND_API_KEY,
            },
        });

        const mailOptions = {
            from: 'joshinishant317@gmail.com', // Replace with your email
            to,
            subject,
            text,
        };

        try {
            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent: ' + info.response);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Error sending email', error });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
