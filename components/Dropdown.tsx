import React, { useRef } from "react";
import DropdownToggle from "./DropdownToggle";
import DropdownItem from "./DropdownItem";
import DropdownMenu from "./DropdownMenu";
import dropdownStyles from "../styles/Dropdown.module.scss";

/**************************************************************************
 * TYPE DEFINITIONS
 **************************************************************************/

type DropdownType = {
  show?: boolean;
  children: React.ReactNode;
};

type ButtonPropsWeControl =
  | "id"
  | "type"
  | "aria-haspopup"
  | "aria-controls"
  | "aria-expanded"
  | "onKeyDown"
  | "onClick";

type MenuItemPropsWeControl =
  | "id"
  | "role"
  | "tabIndex"
  | "aria-disabled"
  | "onPointerLeave"
  | "onPointerMove"
  | "onMouseLeave"
  | "onMouseMove"
  | "onFocus";

type ItemsPropsWeControl =
  | "id"
  | "role"
  | "tabIndex"
  | "aria-activedescendant"
  | "aria-labelledby"
  | "onKeyDown";

const Dropdown = ({ ...props }) => {
  return (
    <div className={dropdownStyles.container}>
      <DropdownToggle />
      <DropdownMenu>
        <DropdownItem itemText="Testing" href="https://google.com" />
        <DropdownItem itemText="Testing" />
        <DropdownItem itemText="Testing" />
      </DropdownMenu>
    </div>
  );
};

export default Dropdown;
