import React from "react";
import dropdownStyles from "../styles/Dropdown.module.scss";

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
		<button
			type="button"
			id="menubutton"
			aria-haspopup="true"
			aria-controls=""
			className={dropdownStyles.toggle}
		>
			Dropdown Toggle
		</button>
	);
};

export default DropdownButton;
