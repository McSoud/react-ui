import { ModalIds } from "./index";

export function toggleModal(id: ModalIds, state?: boolean) {
  const modal = document.getElementById(`${id}-modal`) as HTMLDialogElement;
  typeof state !== "boolean"
    ? modal[modal.open ? "close" : "showModal"]()
    : modal[state ? "showModal" : "close"]();
  return modal.open;
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
