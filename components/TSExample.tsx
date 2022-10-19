import React from "react";

// Button props
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

// Anchor props
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
};

// Input/output options
type Overload = {
  (props: ButtonProps): JSX.Element;
  (props: AnchorProps): JSX.Element;
};

// Guard to check if href exists in props
const hasHref = (props: ButtonProps | AnchorProps): props is AnchorProps =>
  "href" in props;

// Component
const Button: Overload = (props: ButtonProps | AnchorProps) => {
  // anchor render
  if (hasHref(props)) return <a {...props} />;
  // button render
  return <button {...props} />;
};
