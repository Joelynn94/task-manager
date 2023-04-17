import React from 'react';
import dialogStyles from '../styles/Dialog.module.scss';
import DialogOverlay from './DialogOverlay';

type DialogContentProps = {
  /**
   * React children
   */
  children: React.ReactNode;
  /**
   * Closes the Dialog
   */
  onClose: () => void;
};

const DialogContent = ({ children, onClose }: DialogContentProps) => {
  return (
    <div className={dialogStyles.dialogWindow}>
      <button type="button" onClick={onClose}>
        Close dialog
      </button>
      {children}
    </div>
  );
};

export default DialogContent;
