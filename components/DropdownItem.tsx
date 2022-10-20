import React, { useRef } from "react";
import dropdownStyles from "../styles/Dropdown.module.scss";

/**************************************************************************
 * TYPE DEFINITIONS
 **************************************************************************/

type DropdownMenuType = React.ComponentProps<"li"> & {
  /**
   * Menu item unique identifier
   */
  id?: string;
  /**
   * Role for the parent element should be "none" if there is a child element
   */
  role?: React.AriaRole;
  /**
   * Value passed to the `onSelect` handler, useful for identifying the selected menu item.
   */
  key?: React.KeyboardEvent;
  /**
   * Highlight the menu item as active.
   */
  active?: boolean;
  "aria-disabled"?: boolean | "true" | "false";
  /**
   * Indicates that its element can be focused
   */
  tabIndex?: number;
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

type ChildType = React.ComponentProps<"a"> & {
  /**
   * Role for child element should be "menuitem"
   */
  role?: React.AriaRole;
  /**
   * Indicates that its element can be focused
   */
  tabIndex?: number;
  /**
   * HTML `href` attribute corresponding to `a.href`.
   */
  href?: string;
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
const DropdownItem = ({ itemText, href }: DropdownMenuType) => {
  const menuItemRef = useRef<HTMLLIElement>(null);

  const listItemProps = {
    ref: menuItemRef,
    role: isEmptyHref(href) ? "menuitem" : "none",
  };

  const childProps = {
    role: "menuitem",
    tabIndex: -1,
    href: href,
  };

  const menuItem = () => {
    if (listItemProps.role === "menuitem") {
      // tabindex should be set to -1
    }
    // else tabindex index should not be set
  };

  if (isEmptyHref(href)) {
    return (
      <li {...listItemProps} className={dropdownStyles.item}>
        {itemText}
      </li>
    );
  }
  return (
    <li {...listItemProps}>
      <a {...childProps} className={dropdownStyles.item}>
        {itemText}
      </a>
    </li>
  );
};

export default DropdownItem;
