import React, { createContext, useLayoutEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import dialogStyles from '../styles/Dialog.module.scss';

export function documentExists() {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
}

let canUseDOM = typeof window !== 'undefined';

interface IDialogContext {
  /**
   * Controls the visible state of the Dialog
   */
  // isOpen: boolean;
  /**
   * React children
   */
  children: React.ReactNode;
}

const DialogContext = createContext<IDialogContext | null>(null);

const DialogContainer = ({ children }: IDialogContext) => {
  // create div element only once using ref
  const portalNodeRef = useRef<HTMLDivElement | null>(document.createElement('div'));

  useLayoutEffect(() => {
    let ownerDocument = portalNodeRef.current!.ownerDocument;
    let body = ownerDocument.body;
    console.log(body);
    const portalEl = portalNodeRef.current!; // non-null assertion because it will never be null
    body.appendChild(portalEl);

    return () => {
      body.removeChild(portalEl);
    };
  }, []);
  return createPortal(<div className="dialog">{children}</div>, portalNodeRef.current);
};

export { DialogContainer };
