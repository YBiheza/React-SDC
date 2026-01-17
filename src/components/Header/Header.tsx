import React from 'react';
import { Logo } from '../Logo/Logo'
import { List } from '../List/List'
import styles from './Header.module.css';
import Cart from '../../assets/Vector.png';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { MealSelector } from '../../selectors/MealsSelector';

const navigation = [
  { name: 'Home', link: '' },
  { name: 'Menu', link: '/menu' },
  { name: 'Company', link: '' },
  { name: 'Login', link: '/authorisation' }
];


export function Header() {

  const totalCount = useAppSelector(MealSelector)

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
              <NavLink to='/OrderPage'>
                <img src={Cart} alt="cart picture" className={styles.cartImg} />
              </NavLink>
            </div>
            <div className={styles.numerous}>
                <p>{totalCount}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
