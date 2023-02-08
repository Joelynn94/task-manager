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

const DIALOG_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  padding: '50px',
  zIndex: 1000
};

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,.7)',
  zIndex: 1000
};

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
      portalNodeRef.current.setAttribute('class', dialogStyles.dialog);
      newContainer.appendChild(portalNodeRef.current);
    } else {
      portalNodeRef.current = document.createElement('div');
      portalNodeRef.current.setAttribute('id', 'dialog-portal');
      portalNodeRef.current.setAttribute('class', dialogStyles.dialog);
      container.appendChild(portalNodeRef.current);
    }
    // Create a div element to render the Dialog into
    container?.appendChild(portalNodeRef.current!);

    // Remove the element from the DOM when we unmount
    return () => {
      container?.removeChild(portalNodeRef.current!);
    };
  }, []);

  return canUseDom && isOpen
    ? createPortal(
        <>
          <div style={OVERLAY_STYLES}></div>
          <div style={DIALOG_STYLES}>
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
