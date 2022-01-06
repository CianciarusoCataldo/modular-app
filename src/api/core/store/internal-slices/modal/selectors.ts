import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "api/core/types/store-types";

export const getModalView = createSelector(
  (state: RootState) => state.modal || { isVisible: false, type: null },
  (modal) => modal
);
