import React, { useRef } from "react";

const DropdownList = ({ direction = "horizontal", ...props }) => {
  const menuRef = useRef<HTMLUListElement>(null);

  const menuProps = {
    ...props,
    direction,
    ref: menuRef,
    role: "menu",
  };

  return (
    <ul id="menu2" {...menuProps}>
      {props.children}
    </ul>
  );
};

export default DropdownList;
