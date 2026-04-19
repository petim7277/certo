import React from 'react';
import styles from './CompanySection.module.css';
import headerImg from '../../assets/signs_image.svg';

const CompanySection = () => {
    return (
        <div className={styles.pageWrapper}>
            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Our Story</h1>
                    <p className={styles.heroDesc}>
                        We believe that everyone has the right to privacy. Our mission is to provide industry-leading spyware detection tools to help individuals protect their mobile lives.
                    </p>
                </div>
                <div className={styles.heroImage}>
                    <img src={headerImg} alt="Our Story" />
                </div>
            </header>

            <section className={styles.contentSection}>
                <div className={styles.textContainer}>
                    <h2>Why we started Certo</h2>
                    <p>
                        In a world where digital threats are constantly evolving, we saw a need for a security solution that was not only effective but also accessible to everyone. 
                        We combined our expertise in mobile security with a passion for protecting personal privacy.
                    </p>
                    <p>
                        Today, our apps are trusted by thousands of users worldwide to scan, detect, and remove threats from their devices, ensuring their digital freedom is never compromised.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default CompanySection;