import { ModalIds } from "./index";

export function toggleModal(id: ModalIds, state?: boolean) {
  const modal = document.getElementById(`${id}-modal`) as HTMLDialogElement;
  typeof state !== "boolean"
    ? modal[modal.open ? "close" : "showModal"]()
    : modal[state ? "showModal" : "close"]();
  return modal.open;
}
