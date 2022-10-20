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

/**************************************************************************
 * COMPONENT
 **************************************************************************/
const Dropdown = ({ ...props }) => {
	const [menuItems, setMenuItems] = React.useState([]);
	const [activeIndex, setActiveIndex] = React.useState(0);

	const firstIndex = () => setActiveIndex(0);
	const lastIndex = () => setActiveIndex(menuItems.length - 1);

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
