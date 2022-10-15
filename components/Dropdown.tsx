import React from "react";
import DropdownList from "./DropdownList";

const Dropdown = () => {
	return (
		<div className="menu-button-links">
			<button
				type="button"
				id="menubutton"
				aria-haspopup="true"
				aria-controls="menu2"
			>
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
			<DropdownList />
		</div>
	);
};

export default Dropdown;
