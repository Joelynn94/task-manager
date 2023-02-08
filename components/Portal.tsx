import { type } from 'os';
import React, { useEffect, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

let canUseDOM = typeof window !== 'undefined';

export enum PortalTarget {
  MODAL = 'modal-portal',
  ROOT = 'root'
}

type Portal = {
  /**
   * Regular React children.
   */
  children: React.ReactNode;
  /**
   * The DOM element ID
   */
  targetId: string;
  /**
   * The container ref to which the portal will be appended. If not set the
   * portal will be appended to the body of the component's owner document
   * (typically this is the `document.body`).
   *
   * @see Docs https://reach.tech/portal#portal-containerRef
   */
  containerRef?: React.RefObject<Node>;
};

export const Portal = ({ children, targetId, containerRef }: Portal) => {
  let mountNode = React.useRef<HTMLDivElement | null>(null);
  let portalNode = React.useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!mountNode.current) return;
    // In that case, it's important to append to the correct document element.
    let ownerDocument = mountNode.current!.ownerDocument; // non-null assertion because it will never be null
    let body = containerRef?.current || ownerDocument.body;

    // create div element only once using ref
    if (!portalNode.current) portalNode.current = ownerDocument?.createElement('div')!;
    // portalNode.current = ownerDocument?.createElement('div')!;
    body.appendChild(portalNode.current);
    return () => {
      if (portalNode.current && body) {
        body.removeChild(portalNode.current);
      }
    };
  }, [type, containerRef]);

  return portalNode.current ? (
    createPortal(children, portalNode.current)
  ) : (
    <span ref={mountNode} />
  );
};
