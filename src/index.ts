import Main from "./components/Main";
import Modal from "./components/Modal";
import { toggleModal } from "./functions";
import useLaravelQuery, { UI_OPTIONS } from "./components/Display";
import SvgClose from "./assets/svg/Close";
import SvgLoadingSpinner from "./assets/svg/Loading";
import "./assets/css/index.css";

export interface ModalsRegistration {}

export type ModalIds = ModalsRegistration extends { modals: infer T }
  ? T
  : "example";

export {
  Main,
  Modal,
  useLaravelQuery,
  UI_OPTIONS,
  SvgClose,
  SvgLoadingSpinner,
  toggleModal,
};
