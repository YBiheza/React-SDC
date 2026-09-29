import React from 'react';
import { Logo } from '../Logo/Logo';
import { List } from '../List/List';
import styles from './Header.module.css';
import Cart from '../../assets/Vector.png';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { MealSelector } from '../../selectors/MealsSelector';
import { Button } from '../Button';
import { useTheme } from '../../Context/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSelector';

const navigation = [
  { nameKey: 'header.home', link: '' },
  { nameKey: 'header.menu', link: '/menu' },
  { nameKey: 'header.company', link: '#footer' },
  { nameKey: 'header.login', link: '/authorisation' },
];

export function Header() {
  const { theme, toggleTheme } = useTheme();

  const totalCount = useAppSelector(MealSelector);

  const { t, i18n } = useTranslation()

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Logo link="/" />
        </div>
        <div className={styles.right}>
          <div className={styles.menu}>
            <List points={navigation} parentComponent="Header" />
          </div>
          <Button
            label={t('header.themeToggle')}
            type={'submit'}
            disabled={false}
            toggle={true}
            onClick={toggleTheme}
          />
          <LanguageSwitcher />
          <div className={styles.cartBlock}>
            <NavLink to="/OrderPage">
              <div className={styles.cart}>
                <img src={Cart} alt="cart picture" className={styles.cartImg} />
              </div>
            </NavLink>
            <div className={styles.numerous}>
              <p>{totalCount}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
