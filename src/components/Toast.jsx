import React, { useEffect, useRef } from "react";
import "../styles/components/toast.css";

const Toast = ({ onOpen, onClose, children, color, className, ...props }) => {
  const ref = useRef();
  const duration = 3000;
  useEffect(() => {
    const toast = ref.current;
    if (onOpen) {
      toast.style.display = "inline-flex";

      const timer = setTimeout(() => {
        toast.style.display = "none";
        onClose(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [onOpen, onClose]);

  return (
    <div ref={ref} className={`toast ${color} ${className ? className : ""}`} style={{ animationDuration: `${duration}ms` }} {...props}>
      {children}
    </div>
  );
};

export default Toast;
