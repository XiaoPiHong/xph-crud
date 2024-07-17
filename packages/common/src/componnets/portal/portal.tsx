import React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";

const Portal = ({
  children,
  getPopperContainer,
}: {
  children: React.ReactElement;
  getPopperContainer: () => HTMLElement;
}) => {
  const [portalRoot, setPortalRoot] = React.useState<HTMLElement | null>(null);

  useEffect(() => {
    const to = getPopperContainer();
    setPortalRoot(to);
  }, []);
  return portalRoot ? ReactDOM.createPortal(children, portalRoot) : null;
};

export default Portal;
