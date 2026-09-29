import React from 'react';
import mockup from '../../assets/mockup.png';
import trustpilot from '../../assets/trustpilot.png';
import { Button } from '../Button';
import styles from './Hero.module.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';

export function Hero() {
  const navigate = useNavigate();

  const {t, i18n} = useTranslation();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.titleText}>
            <p className={styles.siteTitle}>
              <Trans i18nKey = 'hero.leadText'
              components={{
                delivery: <span className={styles.spanText} />
              }}
              />
            </p>
          </div>
          <div className={styles.paragraphText}>
            <p className={styles.paragraph}>
              {t('hero.loremIpsum')}
            </p>
          </div>
          <div className={styles.buttonBlock}>
            <Button
              onClick={() => navigate('/OrderPage')}
              label={t('hero.orderButton')}
              type={'submit'}
              disabled={false}
            />
          </div>
          <div className={styles.ratingBlock}>
            <img src={trustpilot} alt="rating image" className={styles.TrustpilotImg} />
            <p className={styles.trustpilotText}>
              <Trans i18nKey="hero.ratingText" 
                components={{
                  trustpilot: <span className={`${styles.trustpilotText} ${styles.spanText}`}/>
                }}
              />
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

export default Hero;
