import React, { useRef } from "react";
import DropdownToggle from "./DropdownToggle";
import DropdownItem from "./DropdownItem";
import DropdownMenu from "./DropdownMenu";

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
    <div className="menu-button-links">
      <DropdownToggle />
      <DropdownMenu>
        <DropdownItem />
        <DropdownItem />
        <DropdownItem />
      </DropdownMenu>
    </div>
  );
};

export default Dropdown;
