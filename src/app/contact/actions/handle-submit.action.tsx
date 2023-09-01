'use server';

import sgMail, { MailDataRequired } from '@sendgrid/mail';

import { ContactForm } from '@types';

sgMail.setApiKey(`${process.env.SENDGRID_API_KEY}`);

export async function handleSubmitAction(contactForm: ContactForm, token: string) {
  const email: MailDataRequired = {
    from: {
      name: 'Website contact',
      email: process.env.TO_EMAIL_ADDRESS || '',
    },
    replyTo: contactForm.from,
    to: process.env.TO_EMAIL_ADDRESS,
    subject: contactForm.subject,
    text: contactForm.message,
  };

  const isRecaptchaVerified = await verifyRecaptcha(token);

  if (!isRecaptchaVerified) {
    throw new Error('reCAPTCHA verification failed.');
  }

  await sgMail.send(email);
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  const response = await fetch(verificationUrl, {
    method: 'POST',
  });

  const data = await response.json();

  return data.success && data.score >= 0.5;
}
