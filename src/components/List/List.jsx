import React from 'react';
import styles from './List.module.css';

export function List({points, listTitle, activeItem, ulStyles, liStyles, liTitleStyles, activeColor}) {
  return (
    <>
      {listTitle ? <p className={liTitleStyles}>{listTitle}</p> : null}
      <ul className={`${ulStyles}`}>
        {points.map(point => {
          return (
            <li key={point.name}>
              <a href={point.link} className={`${liStyles} ${point.name === activeItem ? activeColor : ''}` }>{point.name}</a>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default List
