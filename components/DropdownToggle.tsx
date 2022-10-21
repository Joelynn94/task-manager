import React from 'react';
import dropdownStyles from '../styles/Dropdown.module.scss';

/**************************************************************************
 * TYPE DEFINITIONS
 **************************************************************************/

type DropdownToggleType = React.ComponentProps<'button'> & {
  /**
   * Menu toggle unique identifier
   */
  id?: string;
  /**
   * Indicates the button opens a menu.
   */
  'aria-haspopup'?: boolean | 'false' | 'true' | 'menu';
  /**
   * Refers to the menu element controlled by the menu button.
   */
  'aria-controls'?: string | undefined;
  /**
   * Added when the menu is open and removed when menu is closed.
   */
  'aria-expanded'?: boolean | 'true' | 'false';
  show?: boolean | 'true' | 'false';
  ref?: React.MutableRefObject<HTMLButtonElement | null>;
  onClick?: () => void;
};

/**************************************************************************
 * COMPONENT
 **************************************************************************/
const DropdownButton = (props: DropdownToggleType) => {
  const dropdownButtonProps: DropdownToggleType = {
    'aria-haspopup': 'true',
    'aria-expanded': props.show
  };

  return (
    <button
      type="button"
      {...dropdownButtonProps}
      onClick={props.onClick}
      className={dropdownStyles.toggle}
    >
      Dropdown Toggle
    </button>
  );
};

export default DropdownButton;
