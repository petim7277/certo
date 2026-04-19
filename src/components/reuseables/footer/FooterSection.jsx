import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FooterSection.module.css';

import fbIcon from '../../../assets/facebook_icon.svg';
import twitterIcon from '../../../assets/twitter_icon.svg';
import ytIcon from '../../../assets/youtube_icon.svg';

const Footer = () => {
    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        alert("Thanks for subscribing to our newsletter!");
    };

    return (
        <footer className={styles.footerWrapper}>
            <div className={styles.footerTop}>

                <div className={styles.brandCol}>
                    <h2 className={styles.brandTitle}>Scan. Detect. Remove.</h2>
                    <div className={styles.socialIcons}>
                        <a href="google.com" target="_blank" rel="noreferrer"><img src={twitterIcon} alt="Twitter" /></a>
                        <a href="google.com" target="_blank" rel="noreferrer"><img src={fbIcon} alt="Facebook" /></a>
                        <a href="google.com" target="_blank" rel="noreferrer"><img src={ytIcon} alt="YouTube" /></a>
                    </div>
                    <div className={styles.policyLinks}>
                        <a href="#privacy">Privacy Policy</a>
                        <a href="#terms">Terms of Service</a>
                    </div>
                    <p className={styles.copyright}>
                        Copyright © 2024 Certo Software Limited. Registered in England & Wales No. 10476482.
                    </p>
                    <p className={styles.credit}>Designed & Developed by Certo</p>
                </div>

                <div className={styles.linksCol}>
                    <h3 className={styles.linksTitle}>Certo</h3>
                    <ul className={styles.linksList}>
                        <li><Link to="/iphone">iPhone</Link></li>
                        <li><Link to="/android">Android</Link></li>
                        <li><Link to="/help">Help</Link></li>
                        <li><Link to="/company">About</Link></li>
                        <li><Link to="/#insights">Insights</Link></li>
                    </ul>
                </div>

                <div className={styles.newsletterCol}>
                    <div className={styles.newsletterCard}>
                        <h3 className={styles.newsletterTitle}>Sign up to our newsletter</h3>
                        <p className={styles.newsletterDesc}>
                            Get 10% off your first order! Plus receive the latest mobile security news straight to your inbox.
                        </p>
                        <form className={styles.formGroup} onSubmit={handleNewsletterSubmit}>
                            <input type="email" placeholder="Email address" className={styles.input} required />
                            <button type="submit" className={styles.submitBtn}>Submit</button>
                        </form>
                    </div>
                </div>

            </div>

            <div className={styles.footerBottom}>
                <p>
                    Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.
                </p>
            </div>
        </footer>
    );
};

export default Footer;