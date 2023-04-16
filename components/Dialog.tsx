import React, { createContext, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import dialogStyles from '../styles/Dialog.module.scss';

export function documentExists() {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
}

interface IDialogContext {
  /**
   * Controls the visible state of the Dialog
   */
  isOpen: boolean;
  /**
   * React children
   */
  children: React.ReactNode;
  /**
   * Closes the Dialog
   */
  onClose: () => void;
}

const DialogContext = createContext<IDialogContext | null>(null);

const DialogContainer = ({ isOpen, onClose, children }: IDialogContext) => {
  const [canUseDom, setCanUseDom] = React.useState(false);
  // create div element only once using ref
  const portalNodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setCanUseDom(typeof window !== 'undefined');

    const container = document.getElementById('dialog-root') as HTMLElement;
    if (!container) {
      const newContainer = document.createElement('div');
      newContainer.setAttribute('id', 'dialog-root');
      document.body.appendChild(newContainer);
      portalNodeRef.current = document.createElement('div');
      portalNodeRef.current.setAttribute('id', 'dialog-portal');
      newContainer.appendChild(portalNodeRef.current);
    }
    portalNodeRef.current = document.createElement('div');
    portalNodeRef.current.setAttribute('id', 'dialog-portal');
    // Append the element to the DOM on mount
    container?.appendChild(portalNodeRef.current!);

    // Remove the element from the DOM when we unmount
    return () => {
      container?.removeChild(portalNodeRef.current!);
    };
  }, []);

  return canUseDom && isOpen
    ? createPortal(
        <>
          <div className={dialogStyles.dialogOverlay}></div>
          <div className={dialogStyles.dialogWindow}>
            <button type="button" onClick={onClose}>
              Close dialog
            </button>
            {children}
          </div>
        </>,
        document.getElementById('dialog-root') as HTMLElement
      )
    : null;
};

export default DialogContainer;
