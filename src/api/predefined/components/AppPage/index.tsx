import { AllowedComponent, Container } from "@cianciarusocataldo/modular-ui";
import { driveWithDarkMode } from "@cianciarusocataldo/modular-engine";

/** Custom Modular-app page */
const AppPage = ({
  children,
}: {
  children: AllowedComponent | AllowedComponent[];
}) => {
  const AppContainer = driveWithDarkMode(Container);
  return (
    <AppContainer animated unstyled className="m-2">
      {children}
    </AppContainer>
  );
};

export default AppPage;
