import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import styles from './Header.module.css';

const Header = () => {
    const [isShrunk, setShrunk] = useState(false);
    let shrunkStyle;

    useEffect(() => {
        const scrollHandler = () => {
            setShrunk((isShrunk) => {
                if (!isShrunk && window.pageYOffset > 20) {
                    return true;
                }

                if (isShrunk && window.pageYOffset < 4) {
                    return false;
                }

                return isShrunk;
            });
        };

        if (typeof window !== "undefined") {
            window.addEventListener('scroll', scrollHandler);
        }
    }, []);

    shrunkStyle = isShrunk ? styles['header--shrunk'] : 'xx';

    return (
        <header className={`${styles.header} ${shrunkStyle}`} name="top" >
            <nav className={styles.nav}>
                <ul className={styles.nav__list}>
                    <li className={styles.nav__item}>
                        <Link href='#top'>
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
                    {/* <li className={styles.nav__item}>
                        <Link href='#contact-form'>
                            <a className={styles.nav__link}>Contacts</a>
                        </Link>
                    </li> */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;