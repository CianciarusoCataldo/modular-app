<div align="center">
<img width="600px" alt="" src="https://user-images.githubusercontent.com/47371276/148469432-a9014ca5-32ff-49c7-8f30-a69b3a528006.png" />
</div>
  
# modular-app

![GitHub](https://img.shields.io/github/license/CianciarusoCataldo/modular-app?color=dark&label=%20license) 
![GitHub package.json version](https://img.shields.io/github/package-json/v/CianciarusoCataldo/modular-app?label=Latest%20version)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/CianciarusoCataldo/modular-app?label=Stable%20release)
[![CodeQL analysis](https://github.com/CianciarusoCataldo/modular-app/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/CianciarusoCataldo/modular-app/actions/workflows/codeql-analysis.yml)
[![pages-build-deployment](https://github.com/CianciarusoCataldo/modular-app/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/CianciarusoCataldo/modular-app/actions/workflows/pages/pages-build-deployment)
![GitHub repo size](https://img.shields.io/github/repo-size/CianciarusoCataldo/modular-app)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/CianciarusoCataldo/modular-app?label=Code%20size) 
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/CianciarusoCataldo/modular-app/react?label=React%20version)
![Maintenance](https://img.shields.io/maintenance/yes/2022?label=Maintanined)


An optimized and ready to use React app, a standard template for every projects. Build your Web app from here ! 
<br><br>A production ready version of the base app can be found [here](https://cianciarusocataldo.github.io/modular-app/)

---

## Summary
- [Modular ecosystem](#modular-ecosystem)
- [Installation](#installation)
- [Configuration](#configuration)
  - [APP_NAME](#app_name) 
  - [REDUX](#redux)
  - [ROUTER](#router) 
  - [I18N](#i18n)
- [Global state management](#global-state-management)
  - [Access config settings](#access-config-settings)
  - [Routing system](#routing-system)
  - [Modal](#modal)
  - [UI](#ui)
  - [Customize Redux state](#customize-redux-state) 
- [A fully working example](#a-fully-working-example)
- [Included libraries](#included-libraries)
- [Authors](#authors)
- [License](#license)

---
## Modular ecosystem

Modular-app is composed by 2 different libraries, for different purposes:
- [Modular-ui](https://github.com/CianciarusoCataldo/modular-ui), for UI components
- [Modular-engine](https://github.com/CianciarusoCataldo/modular-engine), for redux global state, i18next localization and most of the app logic. Also, most of dependencies (like redux, redux-first-history and so on) comes fom this library, that act as a single source of truth, to keep them in sync and updated.

<div align="center">
<img width="700px" alt="" src="https://user-images.githubusercontent.com/47371276/149502899-d0784952-2e66-459a-8b56-1c3610454e38.png" />
</div>

Both can be used separately in your project, but they are designed to work together, to use 100% of their functionalities.

---

## Installation
Just download the latest release from [here](https://api.github.com/repos/cianciarusocataldo/modular-app/zipball), to be sure to have the latest version of the app. Once downloaded, unzip the downloaded file. You are ready to configure it !

---
---
## Configuration
The main benefit when using `modular-app` is that it is fully customizable with few code changes (so you can focus on other part of the app). The main config file is located inside `src` folder, `app.config.json`. All settings are loaded, at startup, inside Redux state, to easily retrieve them without loading/importing again the `app.config.json` file. Here you can find a complete list of config parameters:

---
### APP_NAME
Your app name, used, by default (as a starting point), in various part of the application:
- Every page title is composed by `<APP_NAME> - <PAGE_TITLE>`
- The APP_NAME is showed inside the Header and at the top of the Drawer

You can easily change this behaviour inside `AppDrawer` and `AppHeader` components (both components are located into `app/components/moecules` folder). To retrieve this parameter, use `getAppName` redux selector.


:red_circle: **IMPORTANT: set your custom app name also inside `public/manifest.json`, `public/index.html` and `package.json` files.**

---
### REDUX
Additional redux settings. Modular-app gives you some initial redux actions, epics and reducers inside the state, to speed up your development work:
- `ui`: drive some useful UI features, like the `dark-mode`, the `drawer` management, the `toast` notifications system and the `language` actually used to localize your app
- `modal`: manage the global modal system. 

| Parameter | Description |
| ------------- | ------------- |
| MODALS | Enable/disable the modal management system. If `false`, the `modal` reducer will be excluded (and its epics too, so open/close modal actions won't show/hide the app modal) |
| UI | Enable/disable the ui management system. If `false`, the `ui` reducer will be excluded (no dark-mode, toast notifications, drawer and language management) |

---
### ROUTER
Contains all router config parameters. These settings are used to configure the [react-router](https://reactrouter.com/) logic:

| Parameter | Description |
| ------------- | ------------- |
| BASENAME  | Your app basename, is added at the start of every route  |
| HOME_PAGE  | Your Home-page route (that is associated with `HOME_PAGE` component, inside `app/pages` folder), needed for some app features. Every route (URL) not specified inside `PAGES` will redirect to this route. Also, The Home icon is showed at the top-left of the app when the user is into another route (to easily go back to home page)|
| PAGES  | Your app pages. This dictionary (key-value format, the key is the Page name, and the value is the Page associated route) is used to determine which page is showed for each available route. You must specify here your pages to make them accessible by the routing logic. |


:red_circle: **IMPORTANT, TO AVOID ERRORS:**
- **The routing logic will search for every page inside `app/pages` folder, so make sure to create a file for each page (with a default export) specified inside `PAGES`field**
- **Home Page folder/file must be present inside `app/pages` and must be named `HOME_PAGE` for automation purpose, no need to include it into `PAGES` as its route is already set with `HOME_PAGE` (so would be redundant)**

---
### I18N
Modular-app let you fully localize your app (multi-language support) with [I18next](https://react.i18next.com/) library. Inside this field, you can find some localization settings (that will be applied on I18next instance). If you are not familiar with I18next system, take a look at its [official guide](https://www.i18next.com/overview/configuration-options). Below, a list of available settings:

| Parameter | Description |
| ------------- | ------------- |
| FALLBACK_LANGUAGE | Language used as fallback if a copy is missing in a specific language |
| NAMESPACES | Allowed namespaces, as an array |
| DEFAULT_NAMESPACE | Default namespace, used when no namespace is specified |
| LOAD_PATH | Path used by `i18next-http-backend` to load dictionaries. Take a look at [i18next-http-backend page](https://github.com/i18next/i18next-http-backend) for more details |
| PAGES_NAMESPACE | Namespace used specifically to set page titles. The modular-app localization logic will look at `<PAGES_NAMESPACE>` dictionary to determine each page title, using the page key as parameter for i18next t function. |
| MODALS_NAMESPACE | Namespace use to set modals titles. The modular-app localization logic will look at <MODALS_NAMESPACE> dictionary to determine each modal title, using the modal key as parameter for [i18next t function](https://www.i18next.com/translation-function/essentials). |


:red_circle: **IMPORTANT: update your web-app homepage URL inside `package.json` (`homepage` field) and `.env` files**

---
---
## Global state management

Most of the app behaviours are driven by Redux global state. Internally, `modular-app` has 4 state slices, used for different purposes:
- `modal`, to manage modals (can be disabled in config file, see [REDUX](#redux) for details)
- `ui`, to manage UI behaviour (can be disabled in config file, see [REDUX](#redux) for details)
- `router`, to manage routing system
- `config`, to store all settings

---
### Access config settings
All settings inside `app.config.json` are stored inside Redux state at app startup, to access them without loading again the .json file. You can retrieve them with selectors:

| Selector | Returns |
| ------------- | ------------- |
| getConfig | The entire Config object, that contains all settings |
| getRouterConfig | The [Routing](#router) settings |
| getAppName | The [APP_NAME](#app_name) parameter |
| geti18nConfig | The [i18next](#i18n) settings |
| getLanguages | All [Supported languages (SUPPORTED_LANGUAGES)](#i18n) |
| getAppBaseName | The [BASENAME](#router) parameter |
| getPages | The allowed [routes (PAGES)](#router), with [BASENAME](#router) at the start of each route |
| getHomePage | The [HOME_PAGE](#router) route |

---
### Routing system
You can surf between your pages by simply using some specific actions, with some extra features:

| Action  | Effect |
| ------------- | ------------- |
| requestRoute(route)  | Go to to the page associated with the given `route`. If this `route` doesn't exists, you will be redirected to [HOME_PAGE route](#router) |
| goBack  | go to the previous visited route, based on the browser history (if available) |

---
### Modal
You can manage which Modal is showed and when, simply by adding custom components inside `app/modals`(if `MODALS` parameter is set to `true` inside `app.config.json`, see [Redux](#redux) for details):

```tsx
const MODALS = {
  EXAMPLE: <div />,
} as const;
```

Then and by using the `openModal` action, passing the component key as parameter:

```tsx
...
const dispatch = useDispatch();
dispatch(openModal('EXAMPLE'))
...
```

This will open the Modal with the `EXAMPLE` component inside. To close it, just dispatch `closeModal` action. 


| Action  | Effect |
| ------------- | ------------- |
| openModal(type)  | Open pre-configured app modal with selected (`type`) content inside  |
| closeModal  | Close pre-configured app modal  |


You can retrieve actual modal `type` (null if not set) and visibility with `getModalView` selector:

| Selector | Returns |
| ------------- | ------------- |
| getModalView | Modal visibility (`isVisible`) and `type` |

---
### UI
Most of the UI behaviours are driven by `ui` state slice and its actions (if `UI` is set to true inside `app.config.json` file, see [Redux](#redux) for details):

| Action  | Effect |
| ------------- | ------------- |
| switchDarkMode  | Enable/disable dark mode (fully supported by [modular-ui](https://github.com/CianciarusoCataldo/modular-ui) components  |
| openDrawer  | Open app pre-configured Dawer |
| closeDrawer | Close app pre-configured Drawr |
| changeLanguage | Change actual language (can be also set with the given Language selector dropdown menu) |

UI parameter can be retrieved with specific selectors:

| Selector | Returns |
| ------------- | ------------- |
| getUIView | The entire `ui` state slice |
| isDrawerOpen | Drawer visibility |
| isHomePage | `true` if actual route is `HOME_PAGE` route (see [ROUTER](#router) for details), `false` otherwise |
| getLanguage | Actual used language (see [I18N](#i18n) for details) |
| isInDarkMode | `true` if dark mode is enabled, `false` otherwise |

---
### Customize Redux state
If you want to customize Modular-app global state (powered by [Redux](https://redux.js.org/)), you just need to follow few steps:
- Add your custom reducers inside `REDUCERS` object, located to `api/state-slices/reducers` (state interface will be updated accordingly)
- Add your custom epics inside `EPICS`, located to `api/state-slices/reducers`
- Add your custom initial-states (for preloading purpose) inside `PRELOADED_STATE`, located to `api/state-slices/preloaded-state`

---
---
## A fully working example

To better understand how to use `modular-app` system, here is a real example, [my portfolio web-app](https://github.com/CianciarusoCataldo/CianciarusoCataldo.github.io), that is based on `modular-app`. Below, my `app.config.json`: 
```json 
{
  "APP_NAME": "Cataldo Cianciaruso - Portfolio Page",
  "REDUX": {
    "MODAL": true,
    "UI": true
  },
  "ROUTER": {
    "BASENAME": "",
    "HOME_PAGE": "/",
    "PAGES": {
      "INFO": "/info",
      "PROJECTS": "/projects"
    }
  },
  "I18N": {
    "FALLBACK_LANGUAGE": "en",
    "SUPPORTED_LANGUAGES": ["en", "it", "es", "fr", "de"],
    "NAMESPACES": ["home-page", "projects", "info", "work", "education"],
    "DEFAULT_NAMESPACE": "common",
    "LOAD_PATH": "/locales/{{lng}}/{{ns}}.json",
    "PAGES_NAMESPACE": "pages",
    "MODALS_NAMESPACE": "modals"
  }
}

```

From these settings, modular-app system will configure some stuffs:
- `APP_NAME` is set to `Cataldo Cianciaruso - Portfolio Page`
- `ui` and `modal` management systems are both enabled
- There are 3 pages, `HOME_PAGE` (this name can't be changed, for automation purpose), `INFO` and `PROJECTS`, and so 3 components with these names are located inside `app/pages` folder:

![](https://user-images.githubusercontent.com/47371276/148669286-65bf1156-ba48-4fec-9c91-4f2d8eae6edd.png)

- i18next is configured with these settings:
  - Fallback language is set to `en` 
  - Supported languages are "en", `it`, `es`, `fr` and `de`
  - Allowed namespaces are `home-page`, `projects`, `info`, `work`,`education`, `titles` (for pages), and `modals` (for modals titles)
  - `PAGES_NAMESPACE` set to `titles`, and internally contains all pages titles. For example, this is the english version:
  
  ```json
  {
  "HOME_PAGE": "Home",
  "INFO": "Info",
  "PROJECTS": "I miei progetti"
  }
  ```
  
  - `MODALS_NAMESPACE` set to `modals`
  - Strings dictionaries are loaded from `/locales/{{lng}}/{{ns}}.json`, where `lng` is the actual used language and `ns` the requested namespace
 
 To reflect `i18next` settings, there is a `locales` folder inside `public` folder (as `modular-app` is based on [create-react-app](https://create-react-app.dev/)), with 4 folders (for each language) that contains a .json file for every namespace:

![](https://user-images.githubusercontent.com/47371276/148669860-7cdfda48-1c75-4188-a8fc-08afbb2540ee.png)

And here you can see the results:
- My portfolio web-app repository --> https://github.com/CianciarusoCataldo/CianciarusoCataldo.github.io
- Built version of my portfolio web-app --> https://cianciarusocataldo.github.io/

---
---
## Included libraries
- [Modular-ui](https://github.com/CianciarusoCataldo/modular-ui), every UI component comes from this library (check it out, I maintain it too!)
- [Redux](https://redux.js.org/), in conjunction with [Reduxjs toolkit](https://redux-toolkit.js.org/) and [Redux observable](https://redux-observable.js.org/), for global state management
- [PostCSS](https://postcss.org/), to parse and optimize `.css` output files (expecially to lower final bundle size)
- [TailwindCSS](https://tailwindcss.com/), for a smoother development experience when styling elements
- [I18next](https://www.i18next.com/) (with its React specific implementation, [react-i18next](https://react.i18next.com/)), to fully support multi-language when localizing the app
- [redux-first-history](https://github.com/salvoravida/redux-first-history), with [react-router v5](https://reactrouter.com/), to manage page routes with Redux store as a single source of truth, with browser history support
- [React-toastify](https://fkhadra.github.io/react-toastify/introduction/), to show custom toast notifications
- Modular-app is written entirely with [Typescript](https://www.typescriptlang.org/) and it is based on the latest version of [create-react-app](https://create-react-app.dev/) building system

## Authors

- [**Cataldo Cianciaruso**](https://github.com/CianciarusoCataldo)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
