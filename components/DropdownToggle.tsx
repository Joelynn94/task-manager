import React from "react";

/**************************************************************************
 * TYPE DEFINITIONS
 **************************************************************************/

type DropdownToggleType = {
  id: string;
  ref: React.MutableRefObject<HTMLButtonElement | null>;
  "aria-expanded": boolean | "true" | "false" | undefined;
  "aria-haspopup"?:
    | boolean
    | "false"
    | "true"
    | "menu"
    | "listbox"
    | "tree"
    | "grid"
    | "dialog"
    | undefined;
  "aria-controls"?: string | undefined;
  onClick: React.MouseEventHandler;
};

/**************************************************************************
 * COMPONENT
 **************************************************************************/

const DropdownButton = () => {
  return (
    <button type="button" id="menubutton" aria-haspopup="true" aria-controls="">
      WAI-ARIA Quick Links
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="down"
        width="12"
        height="9"
        viewBox="0 0 12 9"
      >
        <polygon points="1 0, 11 0, 6 8"></polygon>
      </svg>
    </button>
  );
};

export default DropdownButton;
