import React from 'react';
import styles from './List.module.css';
import { Link, NavLink } from 'react-router-dom';

export function List({points, disabled = '', listTitle, parentComponent}) {

  const ulStyles = parentComponent === 'Footer' ?  styles.footerUlStyles : styles.navList;
  const liStyles = parentComponent === 'Footer' ?  styles.footerLiStyles : styles.navLink;
  const liTitleStyles = parentComponent === 'Footer' ?  styles.footerLiTitle : '';
  
  return (
    <>
      {listTitle ? <p className={`${liTitleStyles}`}>{listTitle}</p> : null}
      <ul className={`${ulStyles}`}>
        {points.map(point => {
          return (
            <li key={point.name}>
              <NavLink to={point.link} className={`${liStyles} ${disabled === true ? styles.disabled : ''}` }>{point.name}</NavLink>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default List
