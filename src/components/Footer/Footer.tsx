import React from 'react';
import { Logo } from '../Logo/';
import { List } from '../List';
import styles from './Footer.module.css';
import inst from '../../assets/insta.png';
import twi from '../../assets/twi.png';
import youtube from '../../assets/youtube.png';
import { Blobs } from './Blobs';
import { Trans, useTranslation } from 'react-i18next';

const firstColumn = [
  { nameKey: 'footer.home', link: '' },
  { nameKey: 'footer.order', link: '' },
  { nameKey: 'footer.FAQ', link: '' },
  { nameKey: 'footer.contact', link: '' },
];
const secColumn = [
  { nameKey: 'footer.styleGuide', link: 'https://www.google.com/' },
  { nameKey: 'footer.changelog', link: 'https://www.google.com/' },
  { nameKey: 'footer.licence', link: 'https://www.google.com/' },
  { nameKey: 'footer.university', link: 'https://www.google.com/' },
];
const thirdColumn = [{ nameKey: 'footer.moreCloneables', link: '' }];

export function Footer() {
  const {t, i18n} = useTranslation();
  return (
    <footer className={styles.footer}>
      <Blobs />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <Logo link="#" />
            <div className={styles.slogan}>
              <p className="slogan-title">{t('footer.template')}</p>
              <p className="slogan-text">{t('footer.forBusiness')}</p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={`${styles.ListBlock} ${styles.flist}`}>
              <List points={firstColumn} listTitle="Company" parentComponent="Footer" />
            </div>
            <div className={`${styles.ListBlock} ${styles.seclist}`}>
              <List points={secColumn} listTitle="Template" parentComponent="Footer" />
            </div>
            <div className={`${styles.ListBlock} ${styles.thlist}`}>
              <List points={thirdColumn} listTitle="Flowbase" parentComponent="Footer" />
            </div>
          </div>
        </div>
        <div className={styles.downBlock}>
          <div className={styles.copyright}>
            <p>
              <Trans i18nKey='footer.buildBy'
                components={{
                  flowbase: <span/>,
                  webflow: <span />,
                }}
              />
            </p>
          </div>
          <div className={styles.socialMediaBlock}>
            <a href="">
              <img src={inst} alt="follow our instagram" />
            </a>
            <a href="">
              <img src={twi} alt="follow our twitter" />
            </a>
            <a href="">
              <img src={youtube} alt="youtube icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
