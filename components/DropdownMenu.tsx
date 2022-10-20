import React, { useRef, FocusEvent, AriaRole } from "react";
import dropdownStyles from "../styles/Dropdown.module.scss";

/**************************************************************************
 * TYPE DEFINITIONS
 **************************************************************************/

type DropdownMenuType = {
  /**
   * Controls the visible state of the menu, generally this is provided by the
   * parent `Dropdown` component, but may also be specified as a prop directly.
   */
  show?: boolean;
  /**
   * Role for the dropdown menu should be "menu"
   */
  role?: React.AriaRole;
  children?: React.ReactNode;
  ref?: React.MutableRefObject<HTMLUListElement | null>;
  // firstItem?: number;
  // lastItem?: number;
};

const DropdownMenu = (props: DropdownMenuType) => {
  const menuRef = useRef<HTMLUListElement>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const menuProps = {
    ...props,
    ref: menuRef,
    role: "menu",
  };

  return (
    <ul id="menu2" {...menuProps} className={dropdownStyles.list}>
      {props.children}
    </ul>
  );
};

export default DropdownMenu;
