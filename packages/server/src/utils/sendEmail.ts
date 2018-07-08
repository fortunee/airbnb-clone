import * as nodemailer from 'nodemailer'

export const sendEmail = async (recipient: string, url: string) => {
  // Create a SMTP transporter object
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: process.env.ETHEREAL_NODEMAILER_USER,
        pass: process.env.ETHEREAL_NODEMAILER_USER
    }
  });

  // Message object
  const message = {
    from: 'Abb clone <noreply@abbclone.com>',
    to: `Recipient ${recipient}`,
    subject: 'Abb clone - Email confirmation ✔',
    text: 'Confirm your email',
    html: `<html>
        <body>
        <p>Please click the link below to confirm your email</p>
        <a href="${url}">confirm email</a>
        </body>
        </html>`
  };

  transporter.sendMail(message, (err, info) => {
    if (err) {
        console.log('Error occurred. ' + err.message);
    }

    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
};
