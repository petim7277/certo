import React from 'react';
import styles from './IphoneSection.module.css';
import headerImg from '../../assets/yellow.svg';
import featureIcon from '../../assets/figure_7.svg';

const IphoneSection = () => {
    return (
        <div className={styles.pageWrapper}>
            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Unrivaled Security for Your iPhone</h1>
                    <p className={styles.heroDesc}>
                        Discover complete peace of mind with our advanced spyware detection and security checks tailored specifically for iOS devices.
                    </p>
                    <a href="https://apps.apple.com" target="_blank" rel="noreferrer" className={styles.btnPrimary} style={{ display: 'inline-block', textDecoration: 'none' }}>Download for iPhone</a>
                </div>
                <div className={styles.heroImage}>
                    <img src={headerImg} alt="iPhone Security" />
                </div>
            </header>

            <section className={styles.features}>
                <h2 className={styles.sectionTitle}>Why choose Certo for iOS?</h2>
                <div className={styles.grid}>
                    {[1, 2, 3].map((item) => (
                        <div key={item} className={styles.card}>
                            <img src={featureIcon} alt="Feature" className={styles.icon} />
                            <h3>Deep Scan Engine</h3>
                            <p>We check deep within your iOS file system to find hidden trackers and vulnerabilities that other apps miss.</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default IphoneSection;