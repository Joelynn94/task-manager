import React, { useRef, useEffect, forwardRef } from 'react';
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
};

/**************************************************************************
 * COMPONENT
 **************************************************************************/
const DropdownMenu = forwardRef(
  (props: DropdownMenuType, ref: React.ForwardedRef<HTMLUListElement | null>) => {
    const menuProps: DropdownMenuType = {
      id: props.id,
      role: 'menu',
      'aria-labelledby': props['aria-labelledby']
    };

    return (
      <ul
        id={menuProps.id}
        {...menuProps}
        className={`${dropdownStyles.list} ${props.show ? 'show' : ''}`}
        ref={ref}
      >
        {props.children}
      </ul>
    );
  }
);

export default DropdownMenu;
