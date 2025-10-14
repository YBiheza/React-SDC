import React from 'react';
import { Logo } from '../Logo'
import { List } from '../List'
import styles from './Header.module.css';
import Cart from '../../assets/Vector.png';

const navigation = [
  { name: 'Home', link: '#' },
  { name: 'Menu', link: '#' },
  { name: 'Company', link: '#' },
  { name: 'Login', link: '#' }
];

export function Header({currPage = 'Menu', quantityOfGoods}) {
  return (
    <header className="header">
      <div className={styles.container}>
        <div className={styles.left}>
          <Logo link = '#' />
        </div>
        <div className={styles.right}>
          <div className={styles.menu}>
            <List points = {navigation} activeItem = {currPage} parentComponent = 'Header' disabled={true}/>          
          </div>
          <div className={styles.cartBlock}>
            <div className={styles.cart}>
              <a href = '#'>
                <img src={Cart} alt="cart picture" className={styles.cartImg} />
              </a>
            </div>
            <div className={styles.numerous}>
                <p>{quantityOfGoods}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
