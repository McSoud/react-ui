import Modal from "./components/Modal";
import { toggleModal, capitalize } from "./functions";
import useLaravelQuery, { REACT_UI_OPTIONS } from "./components/Display";
import "./assets/css/index.css";

interface ModalsRegistration {}

export type ModalIds = ModalsRegistration extends { modals: infer T }
  ? T
  : "example";

export { Modal, useLaravelQuery, REACT_UI_OPTIONS as UI_OPTIONS, toggleModal, capitalize };
export * from "./svg";
