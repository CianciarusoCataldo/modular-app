import { driveWithDarkMode } from "@cianciarusocataldo/modular-engine";
import { Label, LabelProps } from "@cianciarusocataldo/modular-ui";

const AppLabel = (props: Omit<LabelProps, "dark">) => {
  const Component = driveWithDarkMode(Label);
  return <Component {...props} />;
};

export default AppLabel;
