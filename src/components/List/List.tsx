import React from 'react';
import styles from './List.module.css';
import { Link, NavLink } from 'react-router-dom';
import type { TListProps } from './TListProps';
import { useTranslation } from 'react-i18next';


export function List({ points, disabled, listTitle, parentComponent }: TListProps) {
  const ulStyles = parentComponent === 'Footer' ? styles.footerUlStyles : styles.navList;
  const liStyles = parentComponent === 'Footer' ? styles.footerLiStyles : styles.navLink;
  const liTitleStyles = parentComponent === 'Footer' ? styles.footerLiTitle : '';

  const {t, i18n } = useTranslation();
  return (
    <>
      {listTitle ? <p className={`${liTitleStyles}`}>{listTitle}</p> : null}
      <ul className={`${ulStyles}`}>
        {points.map((point) => {
          return (
            <li key={point.nameKey}>
              <NavLink
                to={point.link}
                className={` ${styles.liPoint} ${liStyles} ${disabled === true ? styles.disabled : ''}`}
              >
                {t(point.nameKey)}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default List;
