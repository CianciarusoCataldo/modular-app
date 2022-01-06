import { driveWithDarkMode } from "api/helpers/ui-helper";

import { Page } from "@cianciarusocataldo/modular-ui";

/** Custom Modular-app page */
const AppPage = ({
  children,
}: {
  children: JSX.Element | Element | string | (JSX.Element | Element | string)[];
}) => {
  const CustomPage = driveWithDarkMode(Page);
  return <CustomPage>{children}</CustomPage>;
};

export default AppPage;
