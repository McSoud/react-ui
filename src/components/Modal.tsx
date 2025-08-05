import { DetailedHTMLProps, DialogHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { createPortal } from "react-dom";
import { toggleModal } from "../functions";
import { ModalIds } from "../index";
import { SvgClose } from "../svg";

interface Props
  extends Omit<
    DetailedHTMLProps<
      DialogHTMLAttributes<HTMLDialogElement>,
      HTMLDialogElement
    >,
    "id" | "children"
  > {
  id: ModalIds;
  children: ReactNode;
  heading?: ReactNode;
}

export default function Modal({ id, children, heading, ...props }: Props) {
  return (
    <>
      {createPortal(
        <dialog role="dialog" {...props} id={`${id}-modal`} className="modal">
          <header>
            {heading && <h2>{heading}</h2>}
            <button
              onClick={() => toggleModal(id, false)}
              autoFocus={false}
              title="Close modal"
              className="close hover-pop ml-auto"
            >
              <SvgClose />
            </button>
          </header>
          <div className={twMerge("content", props.className)}>{children}</div>
        </dialog>,
        document.body
      )}
    </>
  );
}
