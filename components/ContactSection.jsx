'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [toastMessage, setToastMessage] = useState(null);

  const email = 'jayprakash.pal@flutterjs.dev';
  const phone = '+919082691348';

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setToastMessage(`${label} copied to clipboard!`);
      setTimeout(() => {
        setToastMessage(null);
      }, 3000);
    }).catch(() => {
      setToastMessage(`Could not copy automatically: ${text}`);
      setTimeout(() => {
        setToastMessage(null);
      }, 4000);
    });
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="container contact-inner">
        <div className="contact-copy">
          <p className="section-kicker">HAVE SOMETHING IN MIND?</p>
          <h2 id="contact-heading">
            Let&apos;s make it<br />
            <em>real.</em>
          </h2>
          <p className="contact-lead">
            Tell me what you&apos;re building, who it&apos;s for, and where you need help. 
            I&apos;ll reply within 24 hours with an actionable roadmap.
          </p>

          <div className="contact-actions-row">
            <a
              className="button button-dark"
              href={`mailto:${email}?subject=Project%20Enquiry%20via%20Portfolio`}
            >
              Start a Conversation <span aria-hidden="true">↗</span>
            </a>

            <button
              type="button"
              className="button copy-toast-btn"
              onClick={() => copyToClipboard(email, 'Email address')}
            >
              📋 Copy Email
            </button>

            <button
              type="button"
              className="button copy-toast-btn"
              onClick={() => copyToClipboard(phone, 'Phone number')}
            >
              📞 Copy Phone
            </button>
          </div>

          <div className="contact-direct-links">
            <a href="tel:+919082691348">Call +91 90826 91348</a>
            <a href="https://www.linkedin.com/in/jayprakashpal1005" target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn ↗
            </a>
            <a href="https://github.com/jaypal1046/" target="_blank" rel="noopener noreferrer">
              GitHub Profile ↗
            </a>
          </div>
        </div>

        {/* Orbit Art Visual */}
        <div className="contact-orbit" aria-hidden="true">
          <span>✳</span>
        </div>
      </div>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="toast-notice" role="status" aria-live="polite">
          <span>✓</span> {toastMessage}
        </div>
      )}
    </section>
  );
}
