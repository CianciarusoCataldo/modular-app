import { Epic } from "redux-observable";
import { filter, map, withLatestFrom } from "rxjs/operators";

import { isActualRouteHomepage, updatePageTitle } from "api/helpers/ui-helper";
import { getConfig, getHomePage } from "../config/selectors";
import { checkRoute, locationChange } from "./actions";
import { RootAction, RootState } from "api/core/types/store-types";

export const locationChangeEpic: Epic<RootAction, RootAction, RootState> = (
  action$,
  state$
) => {
  return action$.pipe(
    filter(locationChange.match),
    withLatestFrom(state$),
    map(([_, state]) => {
      updatePageTitle(getConfig(state));
      return checkRoute(isActualRouteHomepage(getHomePage(state)));
    })
  );
};
