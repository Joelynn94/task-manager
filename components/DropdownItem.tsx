import React, { useRef } from "react";

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
  // "aria-disabled"?: boolean | "true" | "false";
  onClick?: React.MouseEventHandler;
  children?: React.ReactElement | ((props: ChildType) => React.ReactNode);
};

type ChildType = {
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
};

/**************************************************************************
 * COMPONENT
 **************************************************************************/

const DropdownItem = ({ children, ...props }: DropdownMenuType) => {
  const menuItemRef = useRef<HTMLLIElement>(null);

  const listItemProps = {
    ...props,
    ref: menuItemRef,
    role: "none",
  };

  const childProps = {
    role: "menuitem",
    tabIndex: -1,
  };
  return (
    <li {...listItemProps}>
      <a href="https://www.w3.org/" {...childProps}>
        W3C Home Page
      </a>
    </li>
  );
};

export default DropdownItem;
