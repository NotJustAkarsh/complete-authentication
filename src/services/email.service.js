import nodemailer from 'nodemailer';
import config from '../config/config.js';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: config.GOOGLE_USER,
    clientId: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
    refreshToken: config.GOOGLE_REFRESH_TOKEN
  }
});

//Verify the connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.error('Error occurred while verifying transporter configuration:', error);
  } else {
    console.log('Transporter configuration is valid.');
  }
});

// Function to send an email

export const sendEmail = async (to, subject, text, html)=>{
    try {
        const info = await transporter.sendMail({
            from : `"Akarsh Singh"<${config.GOOGLE_USER}>`, // sender address
            to, // list of recievers
            subject, // Subject line
            text, // plain text body
            html, // html body
        });

        console.log('Message sent : %s', info.messageId);
        console.log('Preview URL : %s', nodemailer.getTestMessageUrl(info));
    } catch (error) {
        console.log('Error sending email:', error)
    }
}
