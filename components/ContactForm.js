import React from 'react';

import styles from './ContactForm.module.css';
import SectionFooter from './SectionFooter';

const ContactForm = () => {
    return (
        <section className={styles['contact-me']} id="contact-form">
            <header>
                <h1>Contact Me</h1>
                <span className={styles.form__separator}></span>
            </header>
            <form className={styles.form} autoComplete="off">
                <span className={styles.form__elem}>
                    <label className={styles.form__label} htmlFor="name">Name</label>
                    <input
                        className={styles.form__input}
                        id="name"
                        type="text"
                        placeholder="Your name"
                        autoComplete="your-name"
                    />
                </span>
                <span className={styles.form__elem}>
                    <label className={styles.form__label} htmlFor="email">Email</label>
                    <input
                        className={styles.form__input}
                        id="email"
                        type="text"
                        placeholder="Your email"
                        autoComplete="your-password"
                    />
                </span>
                <span className={styles.form__elem}>
                    <label className={styles.form__label} htmlFor="message">Message</label>
                    <textarea
                        className={styles.form__textarea}
                        id="message"
                        rows="5"
                        cols="40"
                    />
                </span>
                <button
                    className={styles['form__submit-btn']}
                    type="submit"
                >
                    Send
                </button>
            </form>
            <SectionFooter />
        </section>
    );
};

export default ContactForm;