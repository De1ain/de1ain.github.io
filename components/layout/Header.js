import React from 'react';
import Link from 'next/link';

import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header} name="top">
            <nav className={styles.nav}>
                <ul className={styles.nav__list}>
                    <li className={styles.nav__item}>
                        <Link href='#about-me'>
                            <a className={styles.nav__link}>About Me</a>
                        </Link>
                    </li>
                    <li className={styles.nav__item}>
                        <Link href='#my-projects'>
                            <a className={styles.nav__link}>My Projects</a>
                        </Link>
                    </li>
                    <li className={styles.nav__item}>
                        <Link href='#open-source'>
                            <a className={styles.nav__link}>Open Source</a>
                        </Link>
                    </li>
                    <li className={styles.nav__item}>
                        <Link href='#contact-form'>
                            <a className={styles.nav__link}>Contacts</a>
                        </Link>
                    </li>
                    <li className={styles.nav__item}>
                        <Link href='#'>
                            <a className={styles.nav__link}>Blog</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;