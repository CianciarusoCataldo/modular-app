import routerInitialState from "./router/initial-state";
import uiInitialState from "./ui/initial-state";
import modalInitialState from "./modal/initial-state";

const INTERNAL_INITIAL_STATE = {
  router: routerInitialState,
  modal: modalInitialState,
  ui: uiInitialState,
};

export default INTERNAL_INITIAL_STATE;
