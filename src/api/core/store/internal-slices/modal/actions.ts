import { createAction } from "@reduxjs/toolkit";
import MODALS from "app/modals";

export const openModal = createAction(
  "@@modal/OPEN_MODAL",
  (modal: keyof typeof MODALS) => ({
    payload: { type: modal },
  })
);

export const closeModal = createAction("@@modal/CLOSE_MODAL");
