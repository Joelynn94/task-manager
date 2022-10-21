import React, { useState } from 'react';
import DropdownToggle from './DropdownToggle';
import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';
import dropdownStyles from '../styles/Dropdown.module.scss';

/**************************************************************************
 * TYPE DEFINITIONS
 **************************************************************************/

type DropdownType = {
  show?: boolean | 'true' | 'false';
  onClick?: () => () => void;
  children?: React.ReactNode;
};

/**************************************************************************
 * COMPONENT
 **************************************************************************/
const Dropdown = ({ ...props }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const firstIndex = () => setActiveIndex(0);
  const lastIndex = () => setActiveIndex(menuItems.length - 1);

  const toggleDropdownMenu = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className={dropdownStyles.container}>
      <DropdownToggle show={dropdownOpen} onClick={toggleDropdownMenu} />
      <DropdownMenu id="menuTest" show={dropdownOpen}>
        <DropdownItem itemText="Testing" href="https://google.com" />
        <DropdownItem itemText="Testing" />
        <DropdownItem itemText="Testing" />
      </DropdownMenu>
    </div>
  );
};

export default Dropdown;
