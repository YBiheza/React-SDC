import React from 'react';
import { Logo } from '../Logo'
import { List } from '../List'
import styles from  './Footer.module.css';
import inst from '../../assets/insta.png'
import twi from '../../assets/twi.png'
import youtube from '../../assets/youtube.png'
import background from '../../assets/bg.png'


const firstColumn = [
  { name: 'Home', link: '#' },
  { name: 'Order', link: '#' },
  { name: 'FAQ', link: '#' },
  { name: 'Contact', link: '#' }
];
const secColumn = [
  { name: 'Style Guide', link: '#' },
  { name: 'Changelog', link: '#' },
  { name: 'Licence', link: '#' },
  { name: 'Webflow University', link: '#' }
];
const thirdColumn = [
  { name: 'More Cloneables', link: '#' }
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={background} alt='background' className={styles.backgroundPic} />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <Logo link = '#' />
            <div className={styles.slogan}>
              <p className="slogan-title">Takeaway & Delivery template</p>
              <p className="slogan-text">for small - medium businesses.</p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={`${styles.List} ${styles.flist}`}>
              <List points = {firstColumn} listTitle = 'Company' liTitleStyles = {styles.liTitle} activeItem = '' ulStyles = {styles.footerUlStyles} liStyles = {styles.footerLiStyles} activeColor = {styles.footerLiStyles} />            
            </div>
            <div className={`${styles.List} ${styles.seclist}`}>
              <List points = {secColumn} listTitle = 'Template' liTitleStyles = {styles.liTitle} activeItem = '' ulStyles = {styles.footerUlStyles} liStyles = {styles.footerLiStyles} activeColor = {styles.footerLiStyles} />            
            </div>
            <div className={`${styles.List} ${styles.thlist}`}>
              <List points = {thirdColumn} listTitle = 'Flowbase' liTitleStyles = {styles.liTitle} activeItem = '' ulStyles = {styles.footerUlStyles} liStyles = {styles.footerLiStyles} activeColor = {styles.footerLiStyles} />            
            </div>
          </div>
        </div>
        <div className={styles.downBlock}>
          <div className={styles.copyright}>
            <p>
              Built by <span>Flowbase</span> · Powered by <span>Webflow</span>
            </p>
          </div>
          <div className={styles.socialMediaBlock}>
            <img src={inst} alt='instagram icon' />
            <img src={ twi } alt='twi icon' />
            <img src={ youtube } alt='youtube icon' />
          </div>
        </div>
      </div>
    </footer>
  );
}
