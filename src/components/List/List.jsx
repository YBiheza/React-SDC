import React from 'react';
import styles from './List.module.css';

export function List({points, disabled = '', listTitle, activeItem, parentComponent}) {

  const ulStyles = parentComponent === 'Footer' ?  styles.footerUlStyles : styles.navList;
  const liStyles = parentComponent === 'Footer' ?  styles.footerLiStyles : styles.navLink;
  const liTitleStyles = parentComponent === 'Footer' ?  styles.footerLiTitle : '';
  const activeItemStyle = parentComponent === 'Header' ?  styles.navLinkActive : '';
  
  return (
    <>
      {listTitle ? <p className={`${liTitleStyles}`}>{listTitle}</p> : null}
      <ul className={`${ulStyles}`}>
        {points.map(point => {
          return (
            <li key={point.name}>
              <a href={point.link} className={`${liStyles} ${disabled === true ? styles.disabled : ''} ${point.name === activeItem ? activeItemStyle : ''}` }>{point.name}</a>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default List
