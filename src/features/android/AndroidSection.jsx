import React from 'react';
import styles from './AndroidSection.module.css';
import headerImg from '../../assets/android-dashboard-certo.svg';
import featureIcon from '../../assets/figure_8.svg';

const AndroidSection = () => {
    return (
        <div className={styles.pageWrapper}>
            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Comprehensive Security for Android</h1>
                    <p className={styles.heroDesc}>
                        Protect your personal data from malicious apps and hidden trackers with our industry-leading Android security solution.
                    </p>
                    <a href="https://play.google.com" target="_blank" rel="noreferrer" className={styles.btnPrimary} style={{display: 'inline-block', textDecoration: 'none'}}>Download for Android</a>
                </div>
                <div className={styles.heroImage}>
                    <img src={headerImg} alt="Android Security" />
                </div>
            </header>

            <section className={styles.features}>
                <h2 className={styles.sectionTitle}>Why choose Certo for Android?</h2>
                <div className={styles.grid}>
                    {[1, 2, 3].map((item) => (
                        <div key={item} className={styles.card}>
                            <img src={featureIcon} alt="Feature" className={styles.icon} />
                            <h3>Real-time Protection</h3>
                            <p>Our app continuously monitors your device for new threats, blocking spyware before it can compromise your data.</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AndroidSection;