import { useSelector } from "react-redux";

import MODALS from "app/modals";

import { driveWithDarkMode } from "api/helpers/ui-helper";
import { useModalTranslation } from "app/hooks/localization";

import { Modal } from "@cianciarusocataldo/modular-ui";
import { getConfig } from "api/core/store/internal-slices/config/selectors";
import { getModalView } from "api/core/store/internal-slices/modal/selectors";

const AppModal = () => {
  const { isVisible, type } = useSelector(getModalView);
  const CONFIG = useSelector(getConfig);
  const ModalComponent = driveWithDarkMode(Modal);
  const ModalContent = type ? MODALS[type] : <div />;
  const t = useModalTranslation();

  return CONFIG.REDUX.MODAL ? (
    <ModalComponent title={type ? t(type) : ""} hide={!isVisible}>
      {ModalContent}
    </ModalComponent>
  ) : (
    <div />
  );
};

export default AppModal;
