import React from 'react';
import styles from './HelpSection.module.css';

const HelpSection = () => {
    const handleSearch = (e) => {
        e.preventDefault();
        alert("Search functionality coming soon!");
    };

    return (
        <div className={styles.pageWrapper}>
            <header className={styles.hero}>
                <h1 className={styles.heroTitle}>How can we help?</h1>
                <form className={styles.searchBar} onSubmit={handleSearch}>
                    <input type="text" placeholder="Search for answers..." required />
                    <button type="submit">Search</button>
                </form>
            </header>

            <section className={styles.categories}>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3>Getting Started</h3>
                        <p>Learn how to install and set up Certo on your device.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Using the App</h3>
                        <p>Guides on scanning, detecting, and removing threats.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Billing & Account</h3>
                        <p>Manage your subscription and account settings.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Troubleshooting</h3>
                        <p>Solutions to common issues and errors.</p>
                    </div>
                </div>
            </section>

            <section className={styles.contactSupport}>
                <div className={styles.contactCard}>
                    <h2>Can't find what you're looking for?</h2>
                    <p>Our support team is here to help you with any questions or issues.</p>
                    <a href="mailto:support@certo.com" className={styles.btnPrimary} style={{ display: 'inline-block', textDecoration: 'none' }}>Contact Support</a>
                </div>
            </section>
        </div>
    );
};

export default HelpSection;
