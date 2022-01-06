import MODALS from "app/modals";

export interface ModalState {
  isVisible: boolean;
  type: keyof typeof MODALS | null;
}
