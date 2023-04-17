import React from 'react';
import dialogStyles from '../styles/Dialog.module.scss';

type DialogOverplayProps = {
  /**
   * Controls the visile state of the Dialog
   */
  isOpen: boolean;
  /**
   * Closes the Dialog
   */
  onDismiss: (event?: React.MouseEvent | React.KeyboardEvent) => void;
};

const DialogOverlay = ({ isOpen, onDismiss }: DialogOverplayProps) => {
  return (
    <>
      {isOpen && <div className={dialogStyles.dialogOverlay} onClick={onDismiss}></div>}
    </>
  );
};

export default DialogOverlay;
