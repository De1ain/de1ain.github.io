import React, { Fragment } from 'react';
import Head from 'next/head';

import styles from './Layout.module.css';
import Footer from './Footer';
import Header from './Header';

const Layout = props => {
    return (
        <Fragment>
            <Head>
                <title>Timur Borodin - Portfolio - Web Developer</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            <main className={styles.main}>{props.children}</main>
            <Footer />
        </Fragment>
    );
};


export default Layout;