import Main from "./components/Main";
import Modal from "./components/Modal";
import { toggleModal } from "./functions";
import useLaravelQuery, { UI_OPTIONS } from "./components/Display";
import "./assets/css/index.css";

interface ModalsRegistration {}

export type ModalIds = ModalsRegistration extends { modals: infer T }
  ? T
  : "example";

export { Main, Modal, useLaravelQuery, UI_OPTIONS, toggleModal };
export * from "./svg";
