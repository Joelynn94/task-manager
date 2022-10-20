import React, { useRef } from 'react';
import dropdownStyles from '../styles/Dropdown.module.scss';

/**************************************************************************
 * TYPE DEFINITIONS
 **************************************************************************/

type DropdownMenuItemType = React.ComponentProps<'li'> & {
  /**
   * Menu item unique identifier
   */
  id?: string;
  /**
   * Hides the implied listitem role of the li element from assistive technologies.
   */
  role?: 'none';
  /**
   * Value passed to the `onSelect` handler, useful for identifying the selected menu item.
   */
  key?: React.KeyboardEvent;
  /**
   * Highlight the menu item as active.
   */
  active?: boolean;
  'aria-disabled'?: boolean | 'true' | 'false';
  /**
   * HTML `href` attribute corresponding to `a.href`.
   */
  href?: string;
  /**
   * Text to use for the link.
   */
  itemText: string;
  onClick?: React.MouseEventHandler;
};

type ChildType = React.ComponentProps<'a'> & {
  /**
   * Anchor link item unique identifier
   */
  id?: string;
  /**
   * Identifies the element as a menuitem and provides the accessible name of the menuitem.
   */
  role?: 'menuitem';
  /**
   * Removes the a element from the page tab sequence but keeps it focusable with JavaScript.
   */
  tabIndex?: number;
  /**
   * Text to use for the link.
   */
  itemText: string;
};

/**************************************************************************
 * UTILITIES
 **************************************************************************/
const isEmptyHref = (str: string | undefined) =>
  typeof str === undefined || !str || str.length === 0;

/**************************************************************************
 * COMPONENT
 **************************************************************************/
const DropdownItem = ({ id, itemText, href }: DropdownMenuItemType) => {
  const menuItemRef = useRef<HTMLLIElement>(null);

  const listItemProps = {
    ref: menuItemRef,
    role: 'none'
  };

  const childProps = {
    id: id,
    role: 'menuitem',
    tabIndex: -1,
    href: isEmptyHref(href) ? '#' : href
  };

  return (
    <li {...listItemProps}>
      <a {...childProps} className={dropdownStyles.item}>
        {itemText}
      </a>
    </li>
  );
};

export default DropdownItem;
