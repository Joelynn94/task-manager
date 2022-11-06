import React, { useState, useRef, useEffect } from 'react';
import DropdownToggle from './DropdownToggle';
import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';
import dropdownStyles from '../styles/Dropdown.module.scss';

/**************************************************************************
 * TYPE DEFINITIONS
 **************************************************************************/

type DropdownType = {
  id?: string | number;
  show?: boolean | 'true' | 'false';
  onClick?: () => () => void;
  children?: React.ReactNode;
  buttonText?: string;
};

/**************************************************************************
 * COMPONENT
 **************************************************************************/
const Dropdown = ({ ...props }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const firstIndex = () => setActiveIndex(0);
  const lastIndex = () => setActiveIndex(menuItems.length - 1);

  const toggleDropdownMenu = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (
      menuRef.current &&
      !menuRef?.current?.contains(target) &&
      !buttonRef?.current?.contains(target)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    <div className={dropdownStyles.container}>
      <DropdownToggle
        show={dropdownOpen}
        onClick={toggleDropdownMenu}
        buttonText={props.buttonText}
        ref={buttonRef}
      />
      <DropdownMenu id="menuTest" show={dropdownOpen} ref={menuRef}>
        <DropdownItem itemText="Testing" href="https://google.com" />
        <DropdownItem itemText="Testing" />
        <DropdownItem itemText="Testing" />
      </DropdownMenu>
    </div>
  );
};

export default Dropdown;
