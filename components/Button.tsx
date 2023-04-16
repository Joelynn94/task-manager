import React from 'react';
import buttonStyles from '../styles/Button.module.scss';

type Props = {
  /**
   * The type of the button
   */
  type?: 'button' | 'submit' | 'reset' | undefined;
  /**
   * The aria-label of the button
   * @default undefined
   * @example 'Add New Task'
   * @example 'Edit or delete a board'
   * @example 'Add a new board'
   * @example 'Add a new column'
   */
  ariaLabel?: string;
  /**
   * The class name of the button
   */
  buttonStyle?: string;
  /**
   * The children of the button
   */
  children?: React.ReactNode;
  /**
   * The onClick handler of the button
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = (props: Props) => {
  console.log(props.buttonStyle);
  return (
    <button
      type={props.type}
      className={`${buttonStyles.button} ${buttonStyles[props.buttonStyle ?? 'primary']}`}
      onClick={props.onClick}
      aria-label={props.ariaLabel}
    >
      {props.children}
    </button>
  );
};

export default Button;
