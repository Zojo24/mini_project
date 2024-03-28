import React, { useEffect, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import "../styles/components/dialog.css";

const Dialog = ({ open, close, className, children, ...props }) => {
  const ref = useRef();

  const body = document.body;
  useEffect(() => {
    if (open) {
      ref.current?.showModal();
      body.style.overflow = "hidden";
    } else {
      ref.current?.close();
      body.style.overflow = "visible";
    }
  }, [open]);

  const handleClose = () => {
    // ref.current.classList.add("hide");
    // ref.current.addEventListener(
    //   "animationend",
    //   () => {
    //     ref.current.classList.remove("hide");
    //     ref.current.removeEventListener("animationend", handleClose);
    //     close();
    //   }
    //   false
    //   );
    close();
  };

  return (
    <dialog ref={ref} {...props} onClose={close} className={"dialog " + className}>
      <div>{children}</div>
      <button onClick={handleClose} className="dialog__close">
        <IoCloseOutline />
      </button>
    </dialog>
  );
};

export default Dialog;
