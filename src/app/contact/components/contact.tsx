'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { useReCaptcha } from 'next-recaptcha-v3';

import { ContactForm } from '@types';
import { handleSubmitAction } from '../actions/handle-submit.action';

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    from: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { executeRecaptcha } = useReCaptcha();

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      setIsSubmitting(true);

      const token = await executeRecaptcha('form_submit');

      await handleSubmitAction(formData, token);

      toast.success('Message sent successfully!');

      setFormData({
        from: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      const errorMessage = `Something went wrong. Please use another form of contact.`;

      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <form id="myForm" className="contact-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="email" className="form-label visually-hidden">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                name="from"
                placeholder="YOUR EMAIL"
                value={formData.from}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-12">
            <div className="form-group">
              <label htmlFor="subject" className="form-label visually-hidden">
                Your Subject
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="YOUR SUBJECT"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-group">
              <label htmlFor="message" className="form-label visually-hidden">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="YOUR MESSAGE"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              <p className="disclaimer">
                This site is protected by reCAPTCHA and the Google{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  {' '}
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
                  Terms of Service
                </a>{' '}
                apply.
              </p>
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 submit-button">
            <button type="submit" className="button" disabled={isSubmitting}>
              <span className="button-text">Send Message</span>
              {isSubmitting ? (
                <>
                  <span className="button-icon">
                    <FontAwesomeIcon icon={faSpinner} spin />
                    <span className="sr-only">Loading...</span>
                  </span>
                </>
              ) : (
                <>
                  <span className="button-icon">
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
