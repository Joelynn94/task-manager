import React, { forwardRef } from 'react';
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
  buttonText?: string;
};

/**************************************************************************
 * COMPONENT
 **************************************************************************/
const DropdownButton = forwardRef(
  (props: DropdownToggleType, ref: React.ForwardedRef<HTMLButtonElement | null>) => {
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
        ref={ref}
      >
        {props.buttonText}
      </button>
    );
  }
);

export default DropdownButton;

// const DropdownMenu = forwardRef(
//   (props: DropdownMenuType, ref: React.ForwardedRef<HTMLUListElement | null>) => {
//     const menuProps: DropdownMenuType = {
//       id: props.id,
//       role: 'menu',
//       'aria-labelledby': props['aria-labelledby']
//     };

//     return (
//       <ul
//         id={menuProps.id}
//         {...menuProps}
//         className={`${dropdownStyles.list} ${props.show ? 'show' : ''}`}
//         ref={ref}
//       >
//         {props.children}
//       </ul>
//     );
//   }
// );

// export default DropdownMenu;
