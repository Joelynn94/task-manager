import React, { createContext, useLayoutEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

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
   * The container ref to which the portal will be appended.
   */
  containerRef?: React.MutableRefObject<HTMLDivElement | null>;
}

const DialogContext = createContext<IDialogContext | null>(null);

const Dialog = ({ isOpen = false, children, containerRef }: IDialogContext) => {
  // create div element only once using ref
  const portalNode = useRef<HTMLDivElement | null>(null);
  if (!portalNode.current) portalNode.current = document.createElement('div');

  useLayoutEffect(() => {
    let ownerDocument = portalNode.current!.ownerDocument; // non-null assertion because it will never be null
  }, []);
  return createPortal(children, portalNode.current);
};

export default Dialog;
