import React from 'react';
import { Logo } from '../Logo'
import { List } from '../List'
import styles from './Header.module.css';
import Cart from '../../assets/Vector.png';
import { NavLink } from 'react-router-dom';

const navigation = [
  { name: 'Home', link: '' },
  { name: 'Menu', link: '/menu' },
  { name: 'Company', link: '/order' },
  { name: 'Login', link: '/authorisation' }
];

export function Header({quantityOfGoods=0}) {
  return (
    <header className="header">
      <div className={styles.container}>
        <div className={styles.left}>
          <Logo link = '#' />
        </div>
        <div className={styles.right}>
          <div className={styles.menu}>
            <List points = {navigation} parentComponent = 'Header' disabled={true}/>          
          </div>
          <div className={styles.cartBlock}>
            <div className={styles.cart}>
              <NavLink to='cart'>
                <img src={Cart} alt="cart picture" className={styles.cartImg} />
              </NavLink>
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
