import React from 'react';
import mockup from '../../assets/mockup.png';
import trustpilot from '../../assets/trustpilot.png';
import { Button } from '../Button'
import styles from './Hero.module.css';
import { NavLink } from 'react-router-dom';

export function Hero() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.titleText}>
            <p className={styles.siteTitle}>
              Beautiful food & takeaway, <span className={styles.spanText}>delivered</span> to your door.
            </p>
          </div>
          <div className={styles.paragraphText}>
            <p className={styles.paragraph}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500.
            </p>
          </div>
          <div className={styles.buttonBlock}>
            <NavLink to="/OrderPage" >
              <Button label = {'Place an order'} />
            </NavLink>
          </div>
          <div className={styles.ratingBlock}>
            <img src={trustpilot} alt="rating image" className={styles.TrustpilotImg} />
            <p className={styles.trustpilotText}>
              <span className={`${styles.trustpilotText} ${styles.spanText}`}>4.8 out of 5 </span>
              based on 2000+ reviews
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <img src={mockup} alt="mockup image" className={styles.mockup} />
        </div>
      </div>
    </main>
  );
}

export default Hero
