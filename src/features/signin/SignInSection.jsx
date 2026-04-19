import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SignInSection.module.css';
import logo_image from '../../assets/logo.svg';

const SignInSection = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Sign In functionality is a work in progress. Please check back later!");
    };

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.leftPanel}>
                <div className={styles.formContainer}>
                    <Link to="/" className={styles.logo}>
                        <img src={logo_image} alt="Certo Logo" />
                    </Link>
                    <h2 className={styles.title}>Welcome back</h2>
                    <p className={styles.subtitle}>Please enter your details to sign in.</p>
                    
                    <div className={styles.ssoGroup}>
                        <button className={styles.btnOutline}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.ssoIcon}>
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                            Log in with Google
                        </button>
                        <button className={styles.btnOutline}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.ssoIcon}>
                                <path d="M17.05 13.56c-.02-2.31 1.89-3.42 1.98-3.47-1.08-1.58-2.76-1.79-3.37-1.82-1.43-.14-2.79.84-3.52.84-.73 0-1.85-.82-3.04-.8-1.55.02-2.98.9-3.78 2.29-1.63 2.82-.42 6.99 1.17 9.29.78 1.12 1.69 2.37 2.91 2.32 1.17-.05 1.62-.76 3.04-.76 1.41 0 1.83.76 3.06.74 1.25-.02 2.05-1.15 2.82-2.27.89-1.3 1.26-2.56 1.28-2.62-.03-.01-2.52-.96-2.55-3.74zM14.94 6.74c.64-.78 1.07-1.86.95-2.94-1.01.04-2.14.67-2.8 1.46-.59.7-.1 1.82.02 2.92 1.12.09 2.19-.66 1.83-1.44z" fill="#000000"/>
                            </svg>
                            Log in with Apple
                        </button>
                    </div>

                    <div className={styles.divider}>
                        <span>or</span>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email">Email address</label>
                            <input type="email" id="email" placeholder="Enter your email" required />
                        </div>
                        
                        <div className={styles.inputGroup}>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Enter your password" required />
                        </div>

                        <div className={styles.forgotPassword}>
                            <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Password reset functionality coming soon."); }}>Forgot password?</a>
                        </div>
                        
                        <button type="submit" className={styles.btnPrimary}>Sign in</button>
                    </form>
                    
                    <p className={styles.signupText}>
                        Don't have an account? <Link to="/signin">Sign up</Link>
                    </p>
                </div>
            </div>
            
            <div className={styles.rightPanel}>
                <div className={styles.visualContent}>
                    <div className={styles.glassCard}>
                        <h3>"Certo gave me my peace of mind back."</h3>
                        <p>- Sarah J., Verified User</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInSection;
