import { RootState } from "api/core/types/store-types";
import { createSelector } from "reselect";

export const getConfig = createSelector(
  (state: RootState) => state.config,
  (config) => config
);

export const getRouterConfig = createSelector(
  getConfig,
  ({ ROUTER }) => ROUTER
);

export const geti18nConfig = createSelector(getConfig, ({ I18N }) => I18N);

export const getAppName = createSelector(getConfig, ({ APP_NAME }) => APP_NAME);

export const getAppBaseName = createSelector(
  getConfig,
  ({ ROUTER }) => ROUTER.BASENAME
);

export const getLanguages = createSelector(
  geti18nConfig,
  ({ SUPPORTED_LANGUAGES }) => SUPPORTED_LANGUAGES
);

export const getPages = createSelector(
  getRouterConfig,
  ({ BASENAME, PAGES }) => {
    let pages: Record<string, string> = {};

    Object.keys(PAGES).forEach((page) => {
      pages[page] = `${BASENAME}${PAGES[page]}`;
    });

    return pages;
  }
);

export const getHomePage = createSelector(
  getRouterConfig,
  ({ BASENAME, HOME_PAGE }) => `${BASENAME}${HOME_PAGE}`
);
