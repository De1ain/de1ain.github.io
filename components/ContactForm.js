import React, { useRef, useState } from 'react';
import { init, send } from '@emailjs/browser';

import styles from './ContactForm.module.css';
import SectionFooter from './SectionFooter';

const ContactForm = () => {
    const [status, setStatus] = useState('Send');
    const name = useRef('');
    const email = useRef('');
    const message = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');

        var templateParams = {
            from_name: name.current.value,
            from_email: email.current.value,
            message: message.current.value
        };
        init('user_1YLvhwb6cXcao1XP5wW4A');
        const serviceID = 'service_kq9m4en';
        const templateID = 'template_ihvtipm';
        send(serviceID, templateID, templateParams)
            .then(() => {
                name.current.value = '';
                email.current.value = '';
                message.current.value = '';
                setStatus('Send');
                alert('Email sent!');
            }, (err) => {
                alert(JSON.stringify(err));
            });
    }

    return (
        <section className={styles['contact-me']} id="contact-form">
            <header>
                <h1>Contact Me</h1>
                <span className={styles.form__separator}></span>
            </header>
            <form
                className={styles.form}
                onSubmit={handleSubmit}
            >
                <span className={styles.form__elem}>
                    <input
                        className={styles.form__input}
                        id="name"
                        type="text"
                        placeholder="Your name"
                        autoComplete="off"
                        required
                        ref={name}
                    />
                </span>
                <span className={styles.form__elem}>
                    <input
                        className={styles.form__input}
                        id="email"
                        type="email"
                        placeholder="Your email"
                        autoComplete="off"
                        required
                        ref={email}
                    />
                </span>
                <span className={styles.form__elem}>
                    <textarea
                        className={styles.form__textarea}
                        id="message"
                        rows="5"
                        cols="40"
                        placeholder="Message"
                        required
                        ref={message}
                    />
                </span>
                <button
                    className={styles['form__submit-btn']}
                    type="submit"
                >
                    {status}
                </button>
            </form>
            <SectionFooter />
        </section>
    );
};

export default ContactForm;