import React, { useRef } from 'react';
import dropdownStyles from '../styles/Dropdown.module.scss';

/**************************************************************************
 * TYPE DEFINITIONS
 **************************************************************************/

type DropdownMenuType = {
  /**
   * Menu unique identifier
   */
  id?: string;
  /**
   * Identifies the ul element as a menu.
   */
  role?: 'menu';
  /**
   * Refers to the element that contains the accessible name for the menu.
   * The menu is labeled by the menu button.
   */
  'aria-labelledby'?: string;
  /**
   * Controls the visible state of the menu, generally this is provided by the
   * parent `Dropdown` component, but may also be specified as a prop directly.
   */
  show?: boolean;
  children?: React.ReactNode;
  ref?: React.MutableRefObject<HTMLUListElement | null>;
};

/**************************************************************************
 * COMPONENT
 **************************************************************************/
const DropdownMenu = (props: DropdownMenuType) => {
  const menuRef = useRef<HTMLUListElement>(null);

  const menuProps: DropdownMenuType = {
    id: props.id,
    role: 'menu',
    'aria-labelledby': props['aria-labelledby'],
    ref: menuRef
  };

  return (
    <ul id={menuProps.id} {...menuProps} className={`${dropdownStyles.list} show`}>
      {props.children}
    </ul>
  );
};

export default DropdownMenu;
