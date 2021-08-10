import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  // componente
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current); // agrego esto al DOM
    return () => modalRoot.removeChild(elRef.current); // lo limpio
  }, []); // empty array porque quiero que pase 1 vez

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
