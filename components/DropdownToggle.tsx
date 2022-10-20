import React from 'react';
import dropdownStyles from '../styles/Dropdown.module.scss';

/**************************************************************************
 * TYPE DEFINITIONS
 **************************************************************************/

type DropdownToggleType = {
  /**
   * Menu toggle unique identifier
   */
  id?: string;
  /**
   * Button type should be type "button"
   */
  type: string;
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
  show?: boolean;
  ref?: React.MutableRefObject<HTMLButtonElement | null>;
  onClick: () => void;
};

/**************************************************************************
 * COMPONENT
 **************************************************************************/
const DropdownButton = (props: DropdownToggleType) => {
  const dropdownButtonProps: DropdownToggleType = {
    type: 'button',
    'aria-haspopup': 'true',
    'aria-controls': '',
    show: props.show,
    onClick: props.onClick
  };

  return (
    <button
      {...dropdownButtonProps}
      aria-expanded={[props.show].toString()}
      className={dropdownStyles.toggle}
    >
      Dropdown Toggle
    </button>
  );
};

export default DropdownButton;
