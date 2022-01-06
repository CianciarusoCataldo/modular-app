import { useTranslation } from "react-i18next";

export const useCommonTranslation = () => {
  const { t } = useTranslation("common");
  return t;
};

export const usePageTitlesTranslation = () => {
  const { t } = useTranslation("page-titles");
  return t;
};

export const useHomePageTranslation = () => {
  const { t } = useTranslation("home");
  return t;
};

export const useModalTranslation = () => {
  const { t } = useTranslation("modal");
  return t;
};
