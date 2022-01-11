import React from 'react';
import Link from 'next/link';

import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <ul className={classes.nav__list}>
                    <li className={classes.nav__item}>
                        <Link href='#about-me'>
                            <a className={classes.nav__link}>About Me</a>
                        </Link>
                    </li>
                    <li className={classes.nav__item}>
                        <Link href='#my-projects'>
                            <a className={classes.nav__link}>My Projects</a>
                        </Link>
                    </li>
                    <li className={classes.nav__item}>
                        <Link href='#open-source'>
                            <a className={classes.nav__link}>Open Source</a>
                        </Link>
                    </li>
                    <li className={classes.nav__item}>
                        <Link href='#contact-form'>
                            <a className={classes.nav__link}>Contacts</a>
                        </Link>
                    </li>
                    <li className={classes.nav__item}>
                        <Link href='#'>
                            <a className={classes.nav__link}>Blog</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;