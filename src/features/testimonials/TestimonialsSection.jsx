import React from 'react';
import styles from './TestimonialsSection.module.css';

import logo1 from '../../assets/figure.svg';
import logo2 from '../../assets/figure_2.svg';
import logo3 from '../../assets/figure_3.svg';
import logo_4 from '../../assets/figure_4.svg';
import logo5 from '../../assets/figure_5.svg';

const TestimonialsSection = () => {
    const reviews = [
        {
            text: "Very happy with Certo's app. I am not very technically minded but I found it easy enough to use. Also it doesn't seem to slow my phone down or pester me with ads like lots of other apps. Would definitely recommend it.",
            author: "Evelyn K, Sitejabber"
        },
        {
            text: "Best malware detection and removal you can find. I’ve been using this for about a year now and would recommend to anyone. I have an antivirus app as well but I always keep this app on my phone as I think it’s a deeper scan.",
            author: "Clayton Horn, Play Store"
        },
        {
            text: "Installation was a breeze and the software is so easy to use! You just plug your charger into the computer and your phone and scan! That’s it! Thanks for the peace of mind Certo!",
            author: "Katey Flamank, Trustpilot"
        }
    ];

    return (
        <section className={styles.testimonialsWrapper}>
            <div className={styles.testimonialsTop}>
                <h2 className={styles.title}>
                    Loved by thousands of iPhone <br /> and Android users alike
                </h2>

                <div className={styles.cardsContainer}>
                    <div className={styles.carouselTrack}>
                        {[...reviews, ...reviews, ...reviews].map((review, index) => (
                            <div key={index} className={styles.reviewCard}>
                                <div className={styles.stars}>★★★★★</div>
                                <p className={styles.reviewText}>"{review.text}"</p>
                                <p className={styles.author}>{review.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.featuredInWrapper}>
                <p className={styles.featuredText}>Featured in:</p>
                <div className={styles.logosRow}>
                    <img src={logo1} alt="Logo" />
                    <img src={logo2} alt="Logo" />
                    <img src={logo3} alt="Logo" />
                    <img src={logo_4} alt="Logo" />
                    <img src={logo5} alt="Logo" />
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
