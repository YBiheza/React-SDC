import React from 'react';
import { Logo } from '../Logo'
import { List } from '../List'
import styles from  './Footer.module.css';
import inst from '../../assets/insta.png'
import twi from '../../assets/twi.png'
import youtube from '../../assets/youtube.png'


const firstColumn = [
  { name: 'Home', link: '' },
  { name: 'Order', link: '' },
  { name: 'FAQ', link: '' },
  { name: 'Contact', link: '' }
];
const secColumn = [
  { name: 'Style Guide', link: 'https://www.google.com/' },
  { name: 'Changelog', link: 'https://www.google.com/' },
  { name: 'Licence', link: 'https://www.google.com/' },
  { name: 'Webflow University', link: 'https://www.google.com/' }
];
const thirdColumn = [
  { name: 'More Cloneables', link: '' }
];

export function Footer() {
  return (
    <footer className={styles.footer}>
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
            <div className={`${styles.ListBlock} ${styles.flist}`}>
              <List points = {firstColumn} listTitle = 'Company' disabled={true} parentComponent = 'Footer'  />            
            </div>
            <div className={`${styles.ListBlock} ${styles.seclist}`}>
              <List points = {secColumn} listTitle = 'Template'  parentComponent = 'Footer' />            
            </div>
            <div className={`${styles.ListBlock} ${styles.thlist}`}>
              <List points = {thirdColumn} listTitle = 'Flowbase' disabled={true} parentComponent = 'Footer' />            
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
            <a href = ''><img src={inst} alt='follow our instagram' /></a>
            <a href = ''><img src={ twi } alt='follow our twitter' /></a>
            <a href = ''><img src={ youtube } alt='youtube icon' /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
