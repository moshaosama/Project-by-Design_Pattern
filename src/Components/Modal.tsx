import { ReactNode } from "react";

interface ModalProps {
  children?: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return (
    <div className="absolute top-0 left-0 w-full flex justify-center items-center h-full bg-[#00000002]">
      <div className="bg-white w-fit p-15 rounded-2xl">{children}</div>
    </div>
  );
};

Modal.Title = ({ children }: ModalProps) => {
  return <h1>{children}</h1>;
};

Modal.Paragraph = ({ children }: ModalProps) => {
  return <p>{children}</p>;
};

Modal.Buttons = ({ children }: ModalProps) => {
  return <div className="flex gap-4">{children}</div>;
};

export default Modal;
