import { Config } from "api/core/store/internal-slices/config/types";

import INTERNAL_REDUCERS from "./internal-slices/reducers";
import INTERNAL_INITIAL_STATE from "./internal-slices/initial-state";
import ADDITIONAL_EPICS from "api/state-slices/epics";
import ADDITIONAL_REDUCERS from "api/state-slices/reducers";

import {
  combineReducers,
  configureStore,
  createReducer,
  Reducer,
} from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware, Epic } from "redux-observable";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";

import { locationChangeEpic } from "./internal-slices/router/epics";
import { languageChangeEpic } from "./internal-slices/ui/epics";

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
  });

export const initStore = (CONFIG: Config) => {
  const { modal, ui, ...states } = INTERNAL_INITIAL_STATE;
  const { modal: modalReducer, ui: uiReducer, ...slices } = INTERNAL_REDUCERS;

  let internalReducers: Record<string, Reducer<any>> = { ...slices };
  let initialState: Record<string, any> = { ...states, config: CONFIG };
  let epics: Epic[] = [locationChangeEpic];

  if (CONFIG.REDUX.MODAL) {
    initialState.modal = modal;
    internalReducers.modal = modalReducer;
  }

  if (CONFIG.REDUX.UI) {
    initialState.ui = ui;
    internalReducers.ui = uiReducer;
    epics.push(languageChangeEpic);
  }

  const rootReducer = combineReducers({
    router: routerReducer,
    config: createReducer(CONFIG, () => {}),
    ...internalReducers,
    ...ADDITIONAL_REDUCERS,
  });
  const epicMiddleware = createEpicMiddleware();

  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: [epicMiddleware, routerMiddleware],
    devTools: process.env.NODE_ENV === "development",
  });

  epicMiddleware.run(combineEpics(...ADDITIONAL_EPICS, ...epics));
  const history = createReduxHistory(store);

  return { store, history };
};
