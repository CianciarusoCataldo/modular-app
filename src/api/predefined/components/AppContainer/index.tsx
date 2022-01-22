import { driveWithDarkMode } from "@cianciarusocataldo/modular-engine";

import { Container, ContainerProps } from "@cianciarusocataldo/modular-ui";

const AppContainer = (props: ContainerProps) => {
  const Component = driveWithDarkMode(Container);
  return <Component {...props} />;
};

export default AppContainer;
