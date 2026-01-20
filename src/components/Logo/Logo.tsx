import React from 'react';
import styles from './Logo.module.css';
import logo from '../../assets/logo.png';
import type { TLogoProps } from './TLogoProps';

export function Logo({ link = '#' }: TLogoProps) {
  return (
    <div className={styles.logoStyles}>
      <a href={link} className={styles.logoStyles}>
        <img src={logo} alt="Company logo" />
      </a>
    </div>
  );
}

export default Logo;
