import React, { useRef } from "react";

type MenuItemType = React.ComponentProps<"li"> & {
  children?: React.ReactElement | ((props: ChildType) => React.ReactNode);
};

type ChildType = {
  role: React.AriaRole;
  tabIndex: number;
};

const DropdownItem = ({ children, ...props }: MenuItemType) => {
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
