import React from 'react';
import navbarStyles from '../styles/Navbar.module.scss';
import buttonStyles from '../styles/Button.module.scss';
import Dropdown from './Dropdown';

const Navbar = () => {
  return (
    <nav className={navbarStyles.container}>
      <div className={navbarStyles.logo}>
        <Dropdown buttonText={'Platform Launch'} />
      </div>
      <div className={navbarStyles.actions}>
        <button type="button" className={buttonStyles.primary}>
          + Add New Task
        </button>
        <span className={navbarStyles.actionsIcon}>
          <img src="./3-dots.svg" alt="" />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
