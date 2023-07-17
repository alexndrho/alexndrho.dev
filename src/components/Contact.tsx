import { useRef } from 'react';
import { toast } from 'react-toastify';
import styles from '@styles/modules/Contact.module.css';

const Contact = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const resetForm = () => {
    if (nameInputRef.current) nameInputRef.current.value = '';
    if (emailInputRef.current) emailInputRef.current.value = '';
    if (messageInputRef.current) messageInputRef.current.value = '';
  };

  const onSuccess = (message: string) => toast(message, { type: 'success' });
  const onError = (message: string) => toast(message, { type: 'error' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        body: new URLSearchParams(formData as any).toString(),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      onSuccess('Message sent successfully!');
      resetForm();
    } catch (error) {
      if (error instanceof Error) {
        onError(error.message);
      } else {
        onError('Message failed to send');
      }

      resetForm();
    }
  };

  return (
    <section id="contact">
      <div className="container container--section">
        <h2>Contact</h2>

        <p>
          Get in touch with me directly on{' '}
          <a href="mailto: ho.alexander.g@gmail.com" className={styles.contact__link}>
            ho.alexander.g@gmail.com
          </a>{' '}
          or send me a message
        </p>

        {/* Netlify Form */}
        <form
          data-netlify="true"
          name="contact"
          action="POST"
          onSubmit={handleSubmit}
          className={styles.contact__form}
        >
          <input type="hidden" name="form-name" value="contact" />

          <input
            ref={nameInputRef}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className={styles.contact__input}
            required
          />

          <input
            ref={emailInputRef}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className={styles.contact__input}
            required
          />

          <textarea
            ref={messageInputRef}
            name="message"
            id="message"
            placeholder="Message"
            className={styles.contact__textarea}
            required
          />

          <button type="submit" className={styles.contact__button}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
