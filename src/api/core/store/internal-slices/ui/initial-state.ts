import { UIState } from "./types";

const UI_INITIAL_STATE: UIState = {
  isDrawerOpen: false,
  language: navigator.language.split("-")[0],
  isHomePage: true,
  darkMode: true,
};

export default UI_INITIAL_STATE;
