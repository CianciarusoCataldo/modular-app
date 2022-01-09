<div align="center">
<img width="600px" alt="" src="https://user-images.githubusercontent.com/47371276/148469432-a9014ca5-32ff-49c7-8f30-a69b3a528006.png" />
</div>
  
# modular-app

![GitHub](https://img.shields.io/github/license/CianciarusoCataldo/modular-app?color=dark&label=%20license) 
![GitHub package.json version](https://img.shields.io/github/package-json/v/CianciarusoCataldo/modular-app?label=Latest%20version)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/CianciarusoCataldo/modular-app?label=Stable%20release)
![GitHub repo size](https://img.shields.io/github/repo-size/CianciarusoCataldo/modular-app)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/CianciarusoCataldo/modular-app?label=Code%20size) 
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/CianciarusoCataldo/modular-app/react?label=React%20version)
![Maintenance](https://img.shields.io/maintenance/yes/2022?label=Maintanined)

--- 

An optimized and ready to use React app, a standard template for every projects. Internally, use [modular-ui](https://github.com/CianciarusoCataldo/modular-ui) library for UI components (I maintain it too, check it out !). A production ready version of the standard app can be found at https://cianciarusocataldo.github.io/modular-app/

Build your Web app from here ! 

## Summary
- [Installation](#installation)
- [Configuration](#configuration)
  - [APP_NAME](#app_name) 
  - [REDUX](#redux)
  - [ROUTER](#router) 
  - [I18N](#i18n)
- [A fully working example](#a-fully-working-example)
- [Included libraries](#included-libraries)
- [Authors](#authors)
- [License](#license)

## Installation
[Fork this repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo) or just download it as a zip:

![](https://user-images.githubusercontent.com/47371276/148663313-f1a030c3-6202-499c-b101-6a0d4f7c473a.png)

If not forked, unzip the downloaded file, then copy its content inside your web-app repo. You are ready to configure it !

## Configuration
The main benefit when using **modular-app** is that it is fully customizable without huge code changes. The main config is located inside **src** folder, into **app.config.json** file. All settings are loaded, at startup, inside Redux state, to easily get them without loading again the `app.config.json` file. Here you can find a complete list of config parameters:


### APP_NAME
Your app name, used in various part of the application:
- Every page title is composed by <APP_NAME> - <PAGE_TITLE>
- The APP_NAME is showed inside the Header and at the top of the Drawer

---

### REDUX
Additional redux settings. Modular-app gives you some initial redux actions, epics and reducers inside the state, to speed up your development work:
- `ui`: drive some useful UI features, like the `dark-mode`, the `drawer` management through some specific Redux actions and the toast notifications system
- `modal`: manage the global modal system. You can manage which Modal is showed and when, simply by adding custom components inside `app/modals`, and by using the `openModal` action, using the component key as parameter. As an example, I included an initial modal inside this dictionary, called DEFAULT. So, to open this specific modal, you'll just need to dispatch `openModal('DEFAULT')`. Only modals key inside `app/modals` exported object are allowed, otherwise no content will be showed.

| Parameter | Description |
| ------------- | ------------- |
| MODALS | Enable/disable the modal management system. If `false`, the `modal` reducer will be excluded (and its epics too, so open/close modal actions won't show/hide the app modal) |
| UI | Enable/disable the ui management system. If `false`, the `ui` reducer will be excluded (no dark-mode, toast notifications and drawer management) |

---

### ROUTER
Contains all router config parameters. These settings are used to configure the [react-router](https://reactrouter.com/) logic:

| Parameter | Description |
| ------------- | ------------- |
| BASENAME  | Your app basename, is added at the start of every route  |
| HOME_PAGE  | Your Home-page route, needed for some app features. Every route (URL) not specified inside `PAGES` will redirect to this route. Also, The Home icon is showed at the top-left of the app when the user is into another route (to easily go back to home page)|
| PAGES  | Your app pages. This dictionary (key-value format, the key is the Page name, and the value is the Page associated route) is used to determine which page is showed for each available route. You must specify here your pages to make them accessible by the routing logic. |

**IMPORTANT: the routing logic will search for every page inside `app/pages` folder, so make sure to create a file for each page (with a default export) to avoid errors!**

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

---

## A fully working example

To better understand how to use `modular-app` system, here is a real example, [my portfolio web-app](https://github.com/CianciarusoCataldo/CianciarusoCataldo.github.io), that is based on `modular-app`. Below, my `app.config.json`: 
``` 
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
  - Fallback language is "en" 
  - Supported languages are "en", "it", "es", "fr" and "de"
  - Allowed namespaces are "home-page", "projects", "info", "work" and "education"
  - PAGES_NAMESPACE set to `titles`, and internally contains all pages titles. For example, this is the english version:
  ```
  {
  "HOME_PAGE": "Home",
  "INFO": "Info",
  "PROJECTS": "I miei progetti"
  }
  ```
  - MODALS_NAMESPACE set to `modals`
  - Strings dictionaries are loaded from `/locales/{{lng}}/{{ns}}.json`, where `lng` is the actual used language and `ns` the requested namespace
 
 To reflect `i18next` settings, there is a `locales` folder inside `public` folder (as `modular-app` is based on [create-react-app](https://create-react-app.dev/)), with 4 folders (for each language) that contains a json file for every namespace:

![](https://user-images.githubusercontent.com/47371276/148669860-7cdfda48-1c75-4188-a8fc-08afbb2540ee.png)

And here you can see the results:
- My portfolio web-app repository --> https://github.com/CianciarusoCataldo/CianciarusoCataldo.github.io
- Built version of my portfolio web-app --> https://cianciarusocataldo.github.io/

---

## Included libraries
- [Redux](https://redux.js.org/), in conjunction with [Reduxjs toolkit](https://redux-toolkit.js.org/) and [Redux observable](https://redux-observable.js.org/), for global state management
- [PostCSS](https://postcss.org/), to parse and optimize `.css` output files (expecially to lower final bundle size)
- [TailwindCSS](https://tailwindcss.com/), for a smoother development experience when styling elements
- [I18next](https://www.i18next.com/) (with its React specific implementation, [react-i18next](https://react.i18next.com/)), to fully support multi-language when localizing the app
- [redux-first-history](https://github.com/salvoravida/redux-first-history), with [react-router v5](https://reactrouter.com/), to manage page routes with Redux store as a single source of truth, with browser history support
- Modular-app is written entirely with [Typescript](https://www.typescriptlang.org/) and it is based on the latest version of [create-react-app](https://create-react-app.dev/) building system

## Authors

- [**Cataldo Cianciaruso**](https://github.com/CianciarusoCataldo)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
