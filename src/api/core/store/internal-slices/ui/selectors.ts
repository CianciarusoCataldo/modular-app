import { RootState } from "api/core/types/store-types";
import { createSelector } from "reselect";
import { UIState } from "./types";

export const getUIView = createSelector(
  (state: RootState): UIState =>
    state.ui || {
      isDrawerOpen: false,
      language: "en",
      isHomePage: false,
      darkMode: false,
    },
  (uiState) => uiState
);

export const isDrawerOpen = createSelector(
  getUIView,
  ({ isDrawerOpen }) => isDrawerOpen
);

export const isHomePage = createSelector(
  getUIView,
  ({ isHomePage }) => isHomePage
);

export const getLanguage = createSelector(
  getUIView,
  ({ language }) => language
);

export const isInDarkMode = createSelector(
  getUIView,
  ({ darkMode }) => darkMode
);
