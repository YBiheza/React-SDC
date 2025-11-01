import React from 'react';
import logo from '../../assets/logo.png';

export function Logo({link}) {
  return (
    <div className={`logo`}>
        {link ? (
            <a href={link}>
                <img src={logo} alt="Company logo" />
            </a>
            ) : (
            <img src={logo} alt="Company logo" />
            )
        }
    </div>
  )
}

export default Logo;
