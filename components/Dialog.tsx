import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import DialogContent from './DialogContent';
import DialogOverlay from './DialogOverlay';

import Button from './Button';

type DialogProps = {
  /**
   * Controls the visile state of the Dialog
   */
  showModal: boolean;
  /**
   * React children
   */
  children: React.ReactNode;
  /**
   * Closes the Dialog
   */
  onDismiss: (event?: React.MouseEvent | React.KeyboardEvent) => void;
};

const Dialog = ({ showModal, children, onDismiss }: DialogProps) => {
  // create div element only once using ref
  const portalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dialogRoot = document.querySelector('#dialog-root') as HTMLDivElement;
    if (!portalRef.current) portalRef.current = document.createElement('div');

    const el = portalRef.current!; // non-null assertion because it will never be null
    dialogRoot.appendChild(el);
    return () => {
      dialogRoot.removeChild(el!);
    };
  }, []);

  return (
    <>
      {showModal &&
        createPortal(
          <>
            <DialogOverlay isOpen={showModal} onDismiss={onDismiss} />
            <DialogContent onClose={onDismiss}>{children}</DialogContent>
          </>,
          portalRef.current!
        )}
    </>
  );
};

export default Dialog;
