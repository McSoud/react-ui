import Modal from "./components/Modal";
import { toggleModal, capitalize } from "./functions";
import useLaravelQuery, { REACT_UI_OPTIONS } from "./components/Display";
import "./assets/css/index.css";

export interface ModalsRegistration {}
export type ModalIds<TModalsRegistration = ModalsRegistration> =
  TModalsRegistration extends { modals: infer T } ? T : unknown;

export {
  Modal,
  useLaravelQuery,
  REACT_UI_OPTIONS as UI_OPTIONS,
  toggleModal,
  capitalize,
};
export * from "./svg";
